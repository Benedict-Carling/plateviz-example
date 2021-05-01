import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Circle from "./Circle/Circle";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import tinycolor from "tinycolor2";
import { normal } from "color-blend";
import { RGBA } from "color-blend/dist/types";
// ICONS
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const sizeToSpaceRatio = 1.5;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export interface ReagentInterface {
  Id?: string;
  Name?: string;
  Color?: string;
  Stock_concentration?: number;
}

export interface WellReagentInterface {
  Id?: string;
  Name?: string;
  Volume?: string;
}

export interface WellInterface {
  Max_volume?: number;
  Filled_volume?: number;
  Working_volume?: number;
  Dead_volume?: number;
  Reagents?: Array<WellReagentInterface>;
}

export interface PlateInterface {
  Id?: string;
  Name?: string;
  Rows?: string;
  Columns?: string;
  Plate_dead_volume?: number;
  Max_volume?: number;
  Working_volume?: number;
  Dead_volume?: number;
  Volume_unit?: string;
  Wells?: Array<WellInterface>;
  Reagents?: Array<ReagentInterface>;
}

const colorReducer = (accumulator: RGBA, currentValue: RGBA) =>
  normal(accumulator, currentValue);

const Plate: React.FC<{ plate: PlateInterface }> = ({ plate }) => {
  const [wellOrReagent, setWellOrreagent] = useState<"well" | "reagent">(
    "well"
  );
  const [clickedWell, setClickedWell] = useState<string>("A1");
  const [clickedIndex, setClickedIndex] = useState<Number>(0);
  const [visibleReagents, setVisableReagents] = useState<{
    [liquid: string]: Boolean;
  }>(
    Object.fromEntries(
      new Map(plate.Reagents?.map((item) => [item.Name, true]))
    )
  );

  const onDeleteReagent = (deletedReagent: string | undefined) => {
    if (typeof deletedReagent === "string") {
      const previous = visibleReagents[deletedReagent];
      setVisableReagents((C) => ({
        ...C,
        [deletedReagent]: !previous,
      }));
    }
  };

  const Width = 600;
  const Columns = Number(plate.Columns);
  const Rows = Number(plate.Rows);

  const COLOR_REAGENT_MAP = new Map();
  plate.Reagents?.map((reagent) => {
    COLOR_REAGENT_MAP.set(reagent.Name, reagent.Color);
  });

  const INDEX_WELL_MAP = (index: any) => {
    var column = index % Columns;
    var row = Math.ceil((index + 1) / Columns);
    row === 0 ? (row = 1) : (row = row);
    setClickedWell(String(letters[row - 1]) + String(column + 1));
  };

  const blendedColors = plate.Wells?.map((well) => {
    if (well.Reagents) {
      const colors_in_well: Array<string> = well.Reagents.map((reagent) =>
        COLOR_REAGENT_MAP.get(reagent.Name)
      );
      const colors_to_remove = Object.entries(visibleReagents)
        .filter((i) => !i[1])
        .map((i) => COLOR_REAGENT_MAP.get(i[0]));
      console.log("to rmove", colors_to_remove);
      console.log("in well", colors_in_well);
      const colors_in_well_filtered = colors_in_well.filter((i) => {
        console.log(i);
        console.log("thing", colors_to_remove.includes(i));
        return !colors_to_remove.includes(i);
      });
      console.log("filtered", colors_in_well_filtered);
      if (colors_in_well_filtered.length === 0) {
        return "#ced8db";
      }
      if (well.Reagents?.length === 1) {
        return colors_in_well_filtered[0];
      }
      const tinycolors = colors_in_well_filtered.map((color: string) => {
        const mytinycolor = tinycolor(color);
        mytinycolor.setAlpha(0.5);
        return mytinycolor.toRgb();
      });
      const blendedColor = tinycolor(tinycolors.reduce(colorReducer));
      blendedColor.setAlpha(1);
      return blendedColor.toHexString();
    }
  });
  console.log(blendedColors);
  console.log(visibleReagents);

  const CircleSpacing = Width / (2.5 * Columns);
  const CircleSize = CircleSpacing * 1.5;

  const getWellFromIndex = (index: any) => {
    var column = index % Columns;
    var row = Math.ceil((index + 1) / Columns);
    row === 0 ? (row = 1) : (row = row);
    setClickedWell(String(letters[row - 1]) + String(column + 1));
  };

  const onClickIndex = (index: any) => {
    setClickedIndex(index);
    getWellFromIndex(index);
  };

  return (
    <Card
      raised
      style={{
        display: "flex",
        width: String(Width + 232 + CircleSpacing / 2) + "px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent style={{ width: "200px" }}>
          <Typography component="h5" variant="h5">
            LabPlate1
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            ThermoFisher plate
          </Typography>
          <Divider />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                paddingTop: "10px",
                paddingRight: "10px",
              }}
            >
              <Chip
                label="Well"
                color="primary"
                variant={wellOrReagent === "well" ? "default" : "outlined"}
                onClick={() => {
                  setWellOrreagent("well");
                }}
              />
            </div>
            <div
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Chip
                label="Reagents"
                color="primary"
                variant={wellOrReagent === "reagent" ? "default" : "outlined"}
                onClick={() => {
                  setWellOrreagent("reagent");
                }}
              />
            </div>
          </div>
          <Divider />
          {wellOrReagent === "well" ? (
            <>
              <Typography component="h5" variant="h5" color="textSecondary">
                {clickedWell}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {plate.Wells && plate.Volume_unit ? (
                  plate.Wells[Number(clickedIndex)] ? (
                    <>
                      <div>
                        Filled Volume -{" "}
                        {plate.Wells[Number(clickedIndex)].Filled_volume +
                          plate.Volume_unit}
                      </div>
                      <div>
                        Max Volume -{" "}
                        {plate.Wells[Number(clickedIndex)].Max_volume +
                          plate.Volume_unit}
                      </div>
                      <div>
                        Dead Volume -{" "}
                        {plate.Wells[Number(clickedIndex)].Dead_volume +
                          plate.Volume_unit}
                      </div>
                      <div>
                        Working Volume -{" "}
                        {plate.Wells[Number(clickedIndex)].Working_volume +
                          plate.Volume_unit}
                      </div>
                    </>
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </Typography>
              <Divider />
              <Typography component="h5" variant="h5" color="textSecondary">
                {"Contents"}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {plate.Wells ? (
                  plate.Wells[Number(clickedIndex)] ? (
                    plate.Wells[Number(clickedIndex)].Reagents ? (
                      plate.Wells[Number(clickedIndex)].Reagents?.map(
                        (reagent) => {
                          return (
                            <div>
                              {reagent.Name} - {reagent.Volume}{" "}
                              {plate.Volume_unit}
                            </div>
                          );
                        }
                      )
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </Typography>
            </>
          ) : (
            <>
              <Typography component="h5" variant="h5" color="textSecondary">
                {"Reagents"}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {plate.Reagents ? (
                  plate.Reagents.map((liquid) => {
                    return (
                      <div style={{ paddingTop: "10px" }}>
                        <Chip
                          style={{
                            backgroundColor: liquid.Color,
                          }}
                          label={liquid.Name}
                          deleteIcon={
                            visibleReagents[
                              liquid.Name as keyof typeof visibleReagents
                            ] ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )
                          }
                          onDelete={() => {
                            onDeleteReagent(liquid.Name);
                          }}
                        />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </Typography>
            </>
          )}
        </CardContent>
      </div>
      <CardContent>
        <Circle
          style={{
            paddingTop: String(CircleSpacing) + "px",
            paddingLeft: String(CircleSpacing) + "px",
          }}
          width={String(Width) + "px"}
          circleSize={CircleSize}
          circleSpacing={CircleSpacing}
          colors={blendedColors}
          onClickIndex={onClickIndex}
        />
      </CardContent>
    </Card>
  );
};

export default Plate;
