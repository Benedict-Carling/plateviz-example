interface ReagentInterface {
  Id?: string;
  Name?: string;
  Color?: string;
  Stock_concentration?: number;
}

interface WellReagentInterface {
  Id?: string;
  Name?: string;
  Volume?: string;
}

interface WellInterface {
  Max_volume?: number;
  Filled_volume?: number;
  Working_volume?: number;
  Dead_volume?: number;
  Reagents?: Array<WellReagentInterface>;
}

interface PlateInterface {
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

const plate96: PlateInterface = {
  Id: "LabPlate2",
  Name: "ThermoFisher Plate",
  Rows: "8",
  Columns: "12",
  Max_volume: 100,
  Working_volume: 90,
  Dead_volume: 5,
  Volume_unit: "ml",
  Wells: [
    {
      Max_volume: 100,
      Filled_volume: 50,
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 50,
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
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
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 25,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
          Volume: "25",
        },
      ],
    },
    {
      Max_volume: 100,
      Filled_volume: 75,
      Working_volume: 90,
      Dead_volume: 5,
      Reagents: [
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "cells",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "forward primer",
          Volume: "25",
        },
        {
          Id: "gsdgdfsgda5g4d6f5h7shds",
          Name: "reverse primer",
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
    {
      Id: "h3gfs5h47f5s7fh6s78gf6",
      Name: "forward primer",
      Color: "#EA6BEC",
      Stock_concentration: 6,
    },
    {
      Id: "h3gfs5h47f5s7fh6s78gf6",
      Name: "reverse primer",
      Color: "#6AF3E6",
      Stock_concentration: 6,
    },
  ],
};

export default plate96;
