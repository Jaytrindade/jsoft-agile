import jagile from "../../src";

const commonNumber = [-1, -1.2, 0, 1, 1.2],
  number = [...commonNumber, NaN],
  commonObject = [{}],
  array = [[]],
  object = [null, ...array, ...commonObject],
  objectId = [new Object("5db7e872dab3eb3d7cc44080")],
  boolean = [true, false],
  string = ["jay", ""];

export const allowedTests = {
  string: {
    true: string,
    resp: true,
    false: [...number, ...object, ...objectId, ...boolean],
    respFalse: false
  },
  number: {
    true: number,
    resp: true,
    false: [...string, ...object, ...objectId, ...boolean],
    respFalse: false
  },
  commonNumber: {
    true: commonNumber,
    resp: true,
    false: [NaN, ...object, ...objectId, ...boolean],
    respFalse: false
  },
  boolean: {
    true: boolean,
    resp: true,
    false: [...string, ...object, ...objectId, ...number],
    respFalse: false
  },
  object: {
    true: object,
    resp: true,
    false: [...string, ...number, ...objectId, ...boolean],
    respFalse: false
  },
  commonObject: {
    true: commonObject,
    resp: true,
    false: [...string, null, ...array, ...objectId, ...number, ...boolean],
    respFalse: false
  },
  objectId: {
    true: objectId,
    resp: true,
    false: [...string, ...object, ...number, ...boolean],
    respFalse: false
  },
  array: {
    true: array,
    resp: true,
    false: [...string, null, {}, ...objectId, ...boolean],
    respFalse: false
  },
  name: {
    true: [
      "jay soft",
      "J'soft",
      "João Trindade",
      "Louis-Dreyfus",
      "Wells-O'Shaugnessy"
    ],
    resp: true,
    false: [
      "j123 trin23_sd soft34",
      "__s'+2jay~",
      "133kjsd j'sdf",
      "jay--dev j's''oft"
    ],
    respFalse: false
  },
  username: {
    true: ["_jay", "jay23_", "jay_soft", "jay.soft", "123"],
    resp: true,
    false: [
      "j123 trin23_sd soft34",
      "__s'+2jay~",
      "133kjsd j'sdf",
      "jay--dev j's''oft"
    ],
    respFalse: false
  },
  email: {
    true: ["jay@gmail.com", "joaotrindade.soft@gmail.com", "23jay@gmail.com"],
    resp: true,
    false: ["jay", "jay@gmail", "jay..@123.com"],
    respFalse: false
  },
  has: {
    true: ["jay", 1, true, { name: "jay" }, [1, "ok"]],
    resp: true,
    false: ["", null, {}, []],
    respFalse: false
  }
};

function checkData(method, data, reverse) {
  let paramCheck = data[reverse ? "false" : "true"],
    typeResp = reverse ? "respFalse" : "resp",
    checked = jagile[method](paramCheck);
  if (checked !== data[typeResp]) {
    return {
      ok: false,
      expected: paramCheck,
      toBe: data[typeResp]
    };
  }
  return { ok: true };
}

export function isTestResult({ method, test, many, reverse }) {
  let data = allowedTests[test],
    typeCheck = reverse ? "false" : "true",
    dataCheck = data[typeCheck],
    result = { expected: true, toBe: true };

  if (many) {
    return {
      ...result,
      ...checkData(method, data, reverse)
    };
  } else {
    if (dataCheck.length >= 1) {
      for (const element of dataCheck) {
        result = {
          ...result,
          ...checkData(method, { ...data, [typeCheck]: element }, reverse)
        };
        if (!result.ok) return result;
      }
    } else {
      result = {
        ...result,
        ...checkData(method, { ...data, [typeCheck]: element }, reverse)
      };
      if (!result.ok) return result;
    }
  }

  return result;
}
