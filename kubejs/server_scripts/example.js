// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info("Hello, World! (Loaded server scripts)");
ServerEvents.recipes((event) => {
  event.remove({ output: 'alexscaves:quarry' })
  event.remove({ output: 'alexscaves:quarry_smasher' })
  event.shaped(
    Item.of("minecraft:tnt", 1), // arg 1: output
    [
      "SGS",
      "GSG", // arg 2: the shape (array of strings)
      "SGS",
    ],
    {
      G: "minecraft:sand",
      S: "minecraft:gunpowder",
    }
  );

  event.custom({
    type: "hexcasting:brainsweep",
    blockIn: {
      type: "block",
      block: "mna:fluid_jug",
    },
    cost: 100000,
    entityIn: {
      type: "entity_type",
      entityType: "minecraft:blaze",
    },
    result: {
      name: "mna:fluid_jug_infinite_lava",
    },
  });

  event.custom({
  "type": "embers:stamping",
  "fluid": {
    "amount": 10,
    "tag": "forge:molten_iron"
  },
  "input": {
    "item": "minecraft:andesite"
  },
  "output": {
    "item": "create:andesite_alloy"
  },
  "stamp": {
    "item": "embers:ingot_stamp"
  }
})

  // event.custom({
  //   type: "bloodmagic:meteor",
  //   input: {
  //     tag: "forge:gems/certus_quartz",
  //   },
  //   syphon: 500000,
  //   explosion: 24.0,
  //   layers: [
  //     {
  //       radius: 1,
  //       additionalWeight: 0,
  //       minWeight: 0,
  //       weightMap: {},
  //       fill: "ae2:flawless_budding_quartz",
  //       shell: "ae2:fluix_block",
  //     },
  //     {
  //       radius: 3,
  //       additionalWeight: 0,
  //       minWeight: 0,
  //       weightMap: [
  //         {
  //           tag: "ae2:fluix_block",
  //           weight: 100,
  //         },
  //       ],
  //       fill: "ae2:sky_stone_block",
  //     },
  //     {
  //       radius: 8,
  //       additionalWeight: 100,
  //       minWeight: 0,
  //       weightMap: [
  //         {
  //           tag: "ae2:quartz_block",
  //           weight: 50,
  //         },
  //       ],
  //       fill: "ae2:sky_stone_block",
  //       shell: "ae2:sky_stone_block",
  //     },
  //   ],
  // });

  console.log("Hello! The recipe event has fired!");
});
