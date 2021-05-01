import React from "react";
import ReactDOM from "react-dom";
import { Hello } from "plateviz";
import { CirclePicker } from "react-color";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Circle from "./Circle/Circle";
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import Plate from "./TheComponent";
import plate96 from "./plate96";

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

const examplePlate: PlateInterface = {
  Id: "fasd97fs9agag9e8h7a98h",
  Name: "Plate1",
  Rows: "3",
  Columns: "4",
  Max_volume: 100,
  Working_volume: 90,
  Dead_volume: 10,
  Volume_unit: "ml",
  Wells: [
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "hsfj253sh6j4fg67j5hd7j5",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "hsfj253sh6j4fg67j5hd7j5",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 50,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "water",
          Volume: "25",
        },
        {
          Id: "hsfj253sh6j4fg67j5hd7j5",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 50,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "water",
          Volume: "25",
        },
        {
          Id: "hsfj253sh6j4fg67j5hd7j5",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "water",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "water",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "water",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "water",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "water",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "water",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "water",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 100,
      Dead_volume: 100,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "water",
          Volume: "25",
        },
      ],
    },
  ],
  Reagents: [
    {
      Id: "1h2g3fh432d3jhgjfkgj6s6h",
      Name: "water",
      Color: "#6FC0E8",
      Stock_concentration: 6,
    },
    {
      Id: "hsfj253sh6j4fg67j5hd7j5",
      Name: "cells",
      Color: "#FB9E00",
      Stock_concentration: 6,
    },
  ],
};

ReactDOM.render(
  <div>
    <Plate plate={plate96} />
  </div>,
  document.getElementById("root")
);
