import { describe, expect, it } from "vitest";
import { contract, xdr } from "../../../src/index.js";
import { TypeGenerator } from "../../../src/bindings/types.js";

describe("generated event interfaces", () => {
  it("marks only omittable map data fields as optional", () => {
    const data = xdr.ScSpecEventParamLocationV0.scSpecEventParamLocationData;
    const topic =
      xdr.ScSpecEventParamLocationV0.scSpecEventParamLocationTopicList;
    const u32 = xdr.ScSpecTypeDef.scSpecTypeU32();
    const val = xdr.ScSpecTypeDef.scSpecTypeVal();
    const event = new xdr.ScSpecEventV0({
      doc: "",
      lib: "",
      name: "payment",
      prefixTopics: [],
      params: [
        new xdr.ScSpecEventParamV0({
          doc: "",
          name: "amount",
          type: u32,
          location: data,
        }),
        new xdr.ScSpecEventParamV0({
          doc: "",
          name: "maybe",
          type: xdr.ScSpecTypeDef.scSpecTypeOption(
            new xdr.ScSpecTypeOption({ valueType: u32 }),
          ),
          location: data,
        }),
        new xdr.ScSpecEventParamV0({
          doc: "",
          name: "unit",
          type: xdr.ScSpecTypeDef.scSpecTypeVoid(),
          location: data,
        }),
        new xdr.ScSpecEventParamV0({
          doc: "",
          name: "value",
          type: val,
          location: data,
        }),
        new xdr.ScSpecEventParamV0({
          doc: "",
          name: "topic",
          type: val,
          location: topic,
        }),
      ],
      dataFormat: xdr.ScSpecEventDataFormat.scSpecEventDataFormatMap,
    });
    const spec = new contract.Spec([xdr.ScSpecEntry.scSpecEntryEventV0(event)]);
    const output = new TypeGenerator(spec).generate();

    expect(output).toContain("amount:");
    expect(output).toContain("maybe?:");
    expect(output).toContain("unit?:");
    expect(output).toContain("value?:");
    expect(output).toContain("topic:");
  });
});
