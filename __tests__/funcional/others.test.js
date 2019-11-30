import jagile from "../../src";

describe("isAll => testing 'string'", () => {
  const check = ["jay", "soft", ""],
    checkFalse = ["jay", 1, true];

  it(`"${check.toString()}" must be 'true'`, () => {
    expect(jagile.isAll(check, "string")).toBe(true);
  });

  it(`"${checkFalse.toString()}" must be 'false'`, () => {
    expect(jagile.isAll(checkFalse, "string")).toBe(false);
  });
});

describe("justifySpaceWords", () => {
  let check = "jay  trindade   soft",
    checked = "jay trindade soft";

  it(`"${check}" must be "${checked}"`, () => {
    expect(jagile.justifySpaceWords(check)).toBe(checked);
  });

  check = "jay ";
  checked = "jay";

  it(`"${check}" must be "${checked}"`, () => {
    expect(jagile.justifySpaceWords(check)).toBe(checked);
  });
});

describe("capitalizeText", () => {
  const check = "jay trindade soft",
    checked1 = "Jay trindade soft",
    checked2 = "Jay Trindade Soft";

  it(`"${check}" must be "${checked1}"`, () => {
    expect(jagile.capitalizeText(check)).toBe(checked1);
  });

  it(`capitalize all "${check}" must be "${checked2}"`, () => {
    expect(jagile.capitalizeText(check, true)).toBe(checked2);
  });
});

describe("checkMinValueEachWords", () => {
  const check = "jay trindade soft";

  it(`min: 3 => "${check}" must be "true"`, () => {
    expect(jagile.checkMinValueEachWords(check, 3)).toBe(true);
  });

  it(`min: 4 => "${check}" must be "false"`, () => {
    expect(jagile.checkMinValueEachWords(check, 4)).toBe(false);
  });
});

describe("checkMaxValueEachWords", () => {
  const check = "jay trindade soft";

  it(`max: 8 => "${check}" must be "true"`, () => {
    expect(jagile.checkMaxValueEachWords(check, 8)).toBe(true);
  });

  it(`min: 5 => "${check}" must be "false"`, () => {
    expect(jagile.checkMaxValueEachWords(check, 5)).toBe(false);
  });
});

describe("checkMinAndMaxValueEachWord", () => {
  const check = "jay trindade soft";

  it(`min: 3, max: 8 => "${check}" must be "true"`, () => {
    expect(jagile.checkMinAndMaxValueEachWord(check, 3, 8)).toBe(true);
  });

  it(`min: 4, max: 6 => "${check}" must be "false"`, () => {
    expect(jagile.checkMinAndMaxValueEachWord(check, 4, 6)).toBe(false);
  });
});

describe("correctName", () => {
  const check = "Ja3y Js---Deve235loper   J'soft",
    checked = "Jay Js-Developer J'soft";

  it(`"${check}" must be "${checked}"`, () => {
    expect(jagile.correctName(check)).toBe(checked);
  });
});

describe("removeArrayElements", () => {
  const arr = ["jay", true, -1, null],
    result2 = ["jay", true],
    result = [...result2, -1];

  it(`"${JSON.stringify(arr)}" removing null must be "${JSON.stringify(
    result
  )}"`, () => {
    expect(jagile.removeArrayElements(arr, null)).toEqual(result);
  });

  it(`"${JSON.stringify(arr)}" removing [-1, null] must be "${JSON.stringify(
    result2
  )}"`, () => {
    expect(jagile.removeArrayElements(arr, [-1, null])).toEqual(result2);
  });
});

describe("removeObjectProps", () => {
  const obj = { name: "jay", username: "jaysoft", top: true },
    result = { name: "jay", top: true },
    result2 = { name: "jay" };

  it(`"${JSON.stringify(
    obj
  )}" removing "username" prop must be "${JSON.stringify(result)}"`, () => {
    expect(jagile.removeObjectProps(obj, "username")).toEqual(result);
  });

  it(`"${JSON.stringify(
    obj
  )}" removing [username, top] props must be "${JSON.stringify(
    result2
  )}"`, () => {
    expect(jagile.removeObjectProps(obj, ["username", "top"])).toEqual(result2);
  });
});

describe("getElementPos", () => {
  const check = [{ name: "jay" }, { name: "soft" }, { name: "trin" }],
    checked = 1;

  it(`"soft" must be "${checked}" pos`, () => {
    expect(jagile.getElementPos(check, "name", "soft")).toBe(checked);
  });
});

describe("uniqueArray", () => {
  const check = ["jay", 1, true, 1, "jay"],
    checked = ["jay", 1, true];

  it(`"${check}" must be "${checked}"`, () => {
    expect(jagile.uniqueArray(check)).toEqual(checked);
  });
});

describe("uniqueArrayObjectBy", () => {
  const check = [{ name: "jay" }, { name: "soft" }, { name: "jay" }],
    checked = [{ name: "jay" }, { name: "soft" }];

  it(`"${check}" must be "${checked}"`, () => {
    expect(jagile.uniqueArrayObjectBy(check, "name")).toEqual(checked);
  });
});

describe("existModule", () => {
  it(`"path" must be "true"`, () => {
    expect(jagile.existModule("path")).toBe(true);
  });
});

describe("wallFilters", () => {
  const rules = {
      login: {
        fields: {
          name: { type: "string", required: true, accepts: ["jay", "soft"] },
          username: { type: "string", required: false, accepts: ["jsoft"] }
        },
        config: {
          minFields: 2,
          output: {
            name: "Name",
            username: "UserName"
          }
        }
      }
    },
    data = { name: "jay", username: "jsoft" },
    result = { data: { Name: "jay", UserName: "jsoft" }, exec: true, ok: true };

  it(`"must be "true"`, () => {
    expect(jagile.wallFilters({ service: "login", data, rules })).toEqual(
      result
    );
  });
});
