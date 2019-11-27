import { isTestResult, allowedTests } from "./is-funcs";

describe("isString", () => {
  it(`"${
    allowedTests.string.true
  }" must be "${allowedTests.string.resp.toString()}"`, () => {
    let result = isTestResult({ method: "isString", test: "string" });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${JSON.stringify(
    allowedTests.string.false
  )}" must be "${allowedTests.string.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isString",
      test: "string",
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isAllString", () => {
  it(`${JSON.stringify(
    allowedTests.string.true
  )} must be "${allowedTests.string.resp.toString()}"`, () => {
    let result = isTestResult({
      method: "isAllString",
      test: "string",
      many: true
    });
    expect(result.expected).toBe(result.toBe);
  });

  it(`${JSON.stringify(
    allowedTests.string.false
  )} must be "${allowedTests.string.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isAllString",
      test: "string",
      many: true,
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isNumber", () => {
  it(`"${
    allowedTests.number.true
  }" must be "${allowedTests.number.resp.toString()}"`, () => {
    let result = isTestResult({ method: "isNumber", test: "number" });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${JSON.stringify(
    allowedTests.number.false
  )}" must be "${allowedTests.number.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isNumber",
      test: "number",
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isCommonNumber", () => {
  it(`"${
    allowedTests.commonNumber.true
  }" must be "${allowedTests.commonNumber.resp.toString()}"`, () => {
    let result = isTestResult({
      method: "isCommonNumber",
      test: "commonNumber"
    });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${JSON.stringify(
    allowedTests.commonNumber.false
  )}" must be "${allowedTests.commonNumber.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isCommonNumber",
      test: "commonNumber",
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isAllCommonNumber", () => {
  it(`${JSON.stringify(
    allowedTests.commonNumber.true
  )} must be "${allowedTests.commonNumber.resp.toString()}"`, () => {
    let result = isTestResult({
      method: "isAllCommonNumber",
      test: "commonNumber",
      many: true
    });
    expect(result.expected).toBe(result.toBe);
  });

  it(`${JSON.stringify(
    allowedTests.commonNumber.false
  )} must be "${allowedTests.commonNumber.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isAllCommonNumber",
      test: "commonNumber",
      many: true,
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isBoolean", () => {
  it(`"${
    allowedTests.boolean.true
  }" must be "${allowedTests.boolean.resp.toString()}"`, () => {
    let result = isTestResult({ method: "isBoolean", test: "boolean" });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${JSON.stringify(
    allowedTests.boolean.true
  )}" must be "${allowedTests.boolean.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isBoolean",
      test: "boolean",
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isAllBoolean", () => {
  it(`${JSON.stringify(
    allowedTests.boolean.true
  )} must be "${allowedTests.boolean.resp.toString()}"`, () => {
    let result = isTestResult({
      method: "isAllBoolean",
      test: "boolean",
      many: true
    });
    expect(result.expected).toBe(result.toBe);
  });

  it(`${JSON.stringify(
    allowedTests.boolean.false
  )} must be "${allowedTests.boolean.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isAllBoolean",
      test: "boolean",
      many: true,
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isObject", () => {
  it(`"${
    allowedTests.object.true
  }" must be "${allowedTests.object.resp.toString()}"`, () => {
    let result = isTestResult({ method: "isObject", test: "object" });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${
    allowedTests.object.false
  }" must be "${allowedTests.object.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isObject",
      test: "object",
      reverse: false
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isCommonObject", () => {
  it(`"${JSON.stringify(
    allowedTests.commonObject.true[0]
  )}" must be "${allowedTests.commonObject.resp.toString()}"`, () => {
    let result = isTestResult({
      method: "isCommonObject",
      test: "commonObject"
    });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${JSON.stringify(
    allowedTests.commonObject.false
  )}" must be "${allowedTests.commonObject.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isCommonObject",
      test: "commonObject",
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isAllCommonObject", () => {
  it(`${JSON.stringify(
    allowedTests.commonObject.true
  )} must be "${allowedTests.commonObject.resp.toString()}"`, () => {
    let result = isTestResult({
      method: "isAllCommonObject",
      test: "commonObject",
      many: true
    });
    expect(result.expected).toBe(result.toBe);
  });

  it(`${JSON.stringify(
    allowedTests.commonObject.false
  )} must be "${allowedTests.commonObject.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isAllCommonObject",
      test: "commonObject",
      many: true,
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isObjectId", () => {
  it(`"${JSON.stringify(
    allowedTests.objectId.true
  )}" must be "${allowedTests.objectId.resp.toString()}"`, () => {
    let result = isTestResult({
      method: "isObjectId",
      test: "objectId"
    });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${JSON.stringify(
    allowedTests.objectId.false
  )}" must be "${allowedTests.objectId.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isObjectId",
      test: "objectId",
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isAllObjectId", () => {
  it(`${JSON.stringify(
    allowedTests.objectId.true
  )} must be "${allowedTests.objectId.resp.toString()}"`, () => {
    let result = isTestResult({
      method: "isAllObjectId",
      test: "objectId",
      many: true
    });
    expect(result.expected).toBe(result.toBe);
  });

  it(`${JSON.stringify(
    allowedTests.objectId.false
  )} must be "${allowedTests.objectId.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isAllObjectId",
      test: "objectId",
      many: true,
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isName", () => {
  it(`"${allowedTests.name.true.toString()}" must be "${allowedTests.name.resp.toString()}"`, () => {
    let result = isTestResult({ method: "isName", test: "name" });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${allowedTests.name.false.toString()}" must be "${allowedTests.name.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isName",
      test: "name",
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isUsername", () => {
  it(`"${allowedTests.username.true.toString()}" must be "${allowedTests.username.resp.toString()}"`, () => {
    let result = isTestResult({ method: "isUsername", test: "username" });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${allowedTests.username.false.toString()}" must be "${allowedTests.username.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isUsername",
      test: "username",
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("isEmail", () => {
  it(`"${allowedTests.username.true.toString()}" must be "${allowedTests.username.resp.toString()}"`, () => {
    let result = isTestResult({ method: "isEmail", test: "email" });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${allowedTests.email.false.toString()}" must be "${allowedTests.email.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "isEmail",
      test: "email",
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("hasValue", () => {
  it(`"${allowedTests.has.true.toString()}" must be "${allowedTests.has.resp.toString()}"`, () => {
    let result = isTestResult({ method: "hasValue", test: "has" });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${allowedTests.has.false.toString()}" must be "${allowedTests.has.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "hasValue",
      test: "has",
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});

describe("hasAllValues", () => {
  it(`"${allowedTests.has.true.toString()}" must be "${allowedTests.has.resp.toString()}"`, () => {
    let result = isTestResult({
      method: "hasAllValues",
      test: "has",
      many: true
    });
    expect(result.expected).toBe(result.toBe);
  });

  it(`"${allowedTests.has.false.toString()}" must be "${allowedTests.has.respFalse.toString()}"`, () => {
    let result = isTestResult({
      method: "hasAllValues",
      test: "has",
      many: true,
      reverse: true
    });
    expect(result.expected).toBe(result.toBe);
  });
});
