const mongoose = require("mongoose");

const isString = value => typeof value === "string";
const isNumber = value => typeof value === "number";

/**
 * check if is common number |
 * ex: 0-9 ? true : false
 * @param {*} value
 */
const isCommonNumber = value => {
  if (isNumber(value)) {
    let aux = Number(value).toString();
    if (aux !== "NaN") return true;
    return false;
  }
  return false;
};
const isBoolean = value => typeof value === "boolean";
const isObject = value => typeof value === "object";
const isArray = value => Array.isArray(value);
const isObjectId = value => mongoose.Types.ObjectId.isValid(value);
const isPhoneNumber = value => {
  let regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  if (regex.test(value)) return true;
  return false;
};
const isEmail = value => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value.trim()
  );
};

/**
 * check if value is an username |
 * ex: [\_joao99, jay99_, jay] = true
 * @param {*} value
 */
const isUsername = value => {
  const regExp = /^[_]?[a-z]+[a-z0-9]*[_]?$/gi;
  return regExp.test(value);
};

/**
 * check if the value is a common Object
 * ex: {} = true : false
 * @param {*} value
 */
const isCommonObject = value => {
  if (isObject(value)) {
    let aux = JSON.stringify(value).split("");
    if (aux[0] === "{") return true;
    return false;
  }
  return false;
};

/**
 * check if has some value
 * @param {*} value
 */
const hasValue = value => {
  if (isString(value) || isArray(value)) return value.length > 0;
  if (isCommonNumber(value) || isBoolean(value) || isObjectId(value))
    return true;
  if (isCommonObject(value)) return Object.keys(value).length > 0;
  if (typeof value === "function") return true;
  return false;
};

/**
 * check all elements if has values |
 * ex: [1, "jay", true] = true |
 * ex-2: [1, "", true] = false |
 * @param {array} value
 */
const hasAllValues = value => {
  if (hasValue(value) && isArray(value)) {
    for (const element of value) {
      if (!hasValue(element)) return false;
    }
    return true;
  }
  return false;
};

//on version 2
/**
 * check if all props have value
 * @param {object} obj - common object
 * @param {array} values - string array
 */
const hasValueAllProps = (obj, values) => {
  let except = [];
  if (hasAllValues([obj, values]) && isCommonObject(obj) && isArray(values)) {
    for (const element of values) {
      if (!hasValue(obj[element])) except.push(element);
    }
    return { ok: !hasValue(except), except };
  }
  return { ok: false, except };
};

/**
 * check if value exist inside of array
 * @param {array} array
 * @param {*} value - It's can be an array
 */
const inArray = (array, value) => {
  if (hasAllValues([array, value]) && isArray(array)) {
    if (isArray(value)) {
      for (const element of value) {
        if (!array.includes(element)) return false;
      }
      return true;
    } else return array.includes(value);
  }
  return false;
};

//on version 2
/**
 * check if any value exists inside array
 * @param {array} array
 * @param {array} value - only array
 */
const inArrayAnyValue = (array, value) => {
  let exist = [],
    notExist = [];
  if (hasAllValues([array, value]) && isArray(array)) {
    if (isArray(value)) {
      for (const element of value) {
        if (!array.includes(element)) return notExist.push(element);
        else exist.push(element);
      }
      return {
        ok: hasValue(exist),
        complele: hasValue(exist) && !hasValue(notExist) ? true : false,
        exist,
        notExist
      };
    } else return { ok: false, complele: false, exist, notExist };
  }
  return { ok: false, complele: false, exist, notExist };
};

/**
 * check if value exist inside of array
 * @param {object} obj - object
 * @param {*} value - It's can be an array
 */
const inObject = (obj, value) => {
  if (hasAllValues([obj, value]) && isCommonObject(obj)) {
    if (isArray(value)) {
      for (const element of value) {
        if (!obj.hasOwnProperty(element)) return false;
      }
      return true;
    } else return obj.hasOwnProperty(value);
  }
  return false;
};

// on version 2
/**
 * check if any prop exists inside object
 * @param {object} obj - object
 * @param {array} values - Only array
 */
const inObjectAnyProp = (obj, values) => {
  let exist = [],
    notExist = [];
  if (hasAllValues([obj, values]) && isCommonObject(obj)) {
    if (isArray(values)) {
      for (const element of values) {
        if (!obj.hasOwnProperty(element)) notExist.push(element);
        else exist.push(element);
      }
      return {
        ok: hasValue(exist),
        complele: hasValue(exist) && !hasValue(notExist) ? true : false,
        exist,
        notExist
      };
    } else return { ok: false, complele: false, exist, notExist };
  }
  return { ok: false, complele: false, exist, notExist };
};

/**
 * check if all elements of array are strings
 * @param {array} value
 */
const isAllString = value => {
  if (hasValue(value) && isArray(value)) {
    for (const element of value) {
      if (!isString(element)) return false;
    }
    return true;
  }

  return false;
};

/**
 * check if all elements of array are common numbers
 * @param {array} value
 */
const isAllCommonNumber = value => {
  if (hasValue(value) && isArray(value)) {
    for (const element of value) {
      if (!isCommonNumber(element)) return false;
    }
    return true;
  }

  return false;
};

/**
 * check if all elements of array are arrays
 * @param {array} value
 */
const isAllArray = value => {
  if (hasValue(value) && isArray(value)) {
    for (const element of value) {
      if (!isArray(element)) return false;
    }
    return true;
  }
  return false;
};

/**
 * check if all elements of array are common objects
 * @param {array} value
 */
const isAllCommonObject = value => {
  if (hasValue(value) && isArray(value)) {
    for (const element of value) {
      if (!isCommonObject(element)) return false;
    }
    return true;
  }
  return false;
};

/**
 * check if all elements of array are objectIds
 * @param {array} value
 */
const isAllObjectId = value => {
  if (hasValue(value) && isArray(value)) {
    for (const element of value) {
      if (!isObjectId(element)) return false;
    }
    return true;
  }
  return false;
};

/**
 * check if all elements of array are booleans
 * @param {array} value
 */
const isAllBoolean = value => {
  if (hasValue(value) && isArray(value)) {
    for (const element of value) {
      if (!isBoolean(element)) return false;
    }
    return true;
  }
  return false;
};

// on version 2.1.0
/**
 * check if all elements of array are typeof passed
 *
 * @param {array} values
 * @param {string} type - typeof
 */
const isAll = (values, type) => {
  if (hasValue(values) && isArray(values) && isString(type)) {
    for (const element of values) {
      if (getTypeof(element) !== type) return false;
    }
    return true;
  }
  return false;
};

/**
 * justify space between words |
 * ex: 'joão  trindade' = 'joão trindade'
 * @param {string} value
 */
const justifySpaceWords = value => {
  if (isString(value) && hasValue(value)) {
    const regExp = /\s+/gi;
    let words = value.replace(regExp, " ");
    return words;
  }
  return value;
};

/**
 * ex: <all=false> 'jOÃO tRiNdade jsoFt' = 'JOÃO tRiNdade jsoFt' |
 * ex-2: <all=true> 'jOÃO tRiNdade jsoFt' = 'JOÃO TRiNdade JsoFt' |
 * @param {string} value
 * @param {boolean} all - true ? "capitalize all words": "capitalize the first word"
 */
const capitalizeText = (value, all = false) => {
  if (isString(value) && hasValue(value)) {
    if (!all) return value.charAt(0).toUpperCase() + value.slice(1);
    else {
      const regExp = /[^\s]+/gi;
      let newText = value.replace(regExp, match => {
        match = match.trim();
        return match.charAt(0).toUpperCase() + match.slice(1);
      });
      return newText;
    }
  }
  return value;
};

/**
 * check the minimum amount of characters for each word |
 *  ex: <min=2> 'joão d trindade' = false |
 *  ex-2: <min=2> 'joão de trindade' = true
 *  @param {string} value - no space char
 *  @param {number} min - positive number
 */
const checkMinValueEachWords = (value, min) => {
  if (hasAllValues([value, min]) && isString(value) && isCommonNumber(min)) {
    value = value.trim();
    const regExp = /[^\s]+/gi;
    let ok = true;

    value.replace(regExp, match => {
      if (match) {
        if (match.trim().length < min) ok = false;
      }
      return "";
    });
    return ok;
  }
  return false;
};

/**
 * check the maximum amount of characters for each word |
 *  ex: <max=5> 'joão trindade' = false |
 *  ex-2: <max=5> 'jay soft' = true
 *  @param {string} value - no space char
 *  @param {number} max - positive number
 */
const checkMaxValueEachWords = (value, max) => {
  if (hasAllValues([value, max]) && isString(value) && isCommonNumber(max)) {
    value = value.trim();
    const regExp = /[^\s]+/gi;
    let ok = true;

    value.replace(regExp, match => {
      if (match) {
        if (match.trim().length > max) ok = false;
      }
      return "";
    });
    return ok;
  }
  return false;
};

/**
 * check the minimum and maximum amount of characters for each word
 * @param {string} value
 * @param {number} min - min value for each word
 * @param {number} max - max value for each word
 */
const checkMinAndMaxValueEachWord = (value, min, max) => {
  if (
    hasAllValues([value, min, max]) &&
    isString(value) &&
    isAllCommonNumber([min, max])
  ) {
    value = value.trim();
    const regExp = /[^\s]+/gi;
    let ok = true;

    value.replace(regExp, match => {
      if (match) {
        match = match.trim();
        let qty = match.length;
        if (qty > max || qty < min) ok = false;
      }
      return "";
    });
    return ok;
  }
  return false;
};

/**
 * remove special characters and space except accents |
 * ex: 'joão980_$ 78 soft' = 'joão soft'
 * @param {*} value
 */
const correctName = value => {
  const regExp = /[^a-zA-ZÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåçèéêëìíîïðñòóôõöøùúûüýÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİĴĵĶķĹĺĻļĽľĿŀŁłŃńŅņŇňŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƠơƯưǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǞǟǠǡǦǧǨǩǪǫǬǭǰǴǵǸǹǺǻǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȞȟȦȧȨȩȪȫȬȭȮȯȰȱȲȳʰʲʳʷʸˡˢˣḀḁḂḃḄḅḆḇḈḉḊḋḌḍḎḏḐḑḒḓḔḕḖḗḘḙḚḛḜḝḞḟḠḡḢḣḤḥḦḧḨḩḪḫḬḭḮḯḰḱḲḳḴḵḶḷḸḹḺḻḼḽḾḿṀṁṂṃṄṅṆṇṈṉṊṋṌṍṎṏṐṑṒṓṔṕṖṗṘṙṚṛṜṝṞṟṠṡṢṣṤṥṦṧṨṩṪṫṬṭṮṯṰṱṲṳṴṵṶṷṸṹṺṻṼṽṾṿẀẁẂẃẄẅẆẇẈẉẊẋẌẍẎẏẐẑẒẓẔẕẖẗẘẙẛẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹ]/gi;
  let spliteds = value.split(" ");
  for (const index in spliteds) {
    spliteds[index] = spliteds[index].replace(regExp, "");
  }
  return justifySpaceWords(spliteds.join(" "));
};

/**
 * remove elements of array
 * @param {array} array
 * @param {*} values - it's can't be an array
 */
const removeArrayElements = (array, values) => {
  if (hasAllValues(array, values) && isArray(array)) {
    if (isArray(values)) {
      for (const element of values) {
        let pos = array.indexOf(element);
        if (pos > -1) array.splice(pos, 1);
      }
    } else {
      let pos = array.indexOf(values);
      if (pos > -1) array.splice(pos, 1);
    }
    return [...array];
  }
  return array;
};

// on version 2
/**
 * get type of value
 * @param {*} value
 */
const getTypeof = value => {
  if (hasValue(value)) {
    if (isString(value)) return "string";
    if (isCommonNumber(value)) return "commonNumber";
    if (isNumber(value)) return "number";
    if (isBoolean(value)) return "boolean";
    if (isCommonObject(value)) return "commonObject";
    if (isObjectId(value)) return "objectId";
    if (isObject(value)) return "object";
    if (isArray(value)) return "array";
  }
  return typeof value;
};

/**
 * get elements of array
 * @param {array} array
 * @param {*} values - it's can't be an array
 */
const getArrayElements = (array, values) => {
  if (hasAllValues(array, values) && isArray(array)) {
    if (isArray(values)) {
      let newArray = [];
      for (const element of values) {
        let pos = array.indexOf(element);
        if (pos > -1) newArray.push(array[pos]);
      }
      return [...newArray];
    } else {
      let pos = array.indexOf(values);
      if (pos > -1) return [array[pos]];
      else return [];
    }
  }
  return array;
};

/**
 * remove object properties
 * @param {object} obj - object
 * @param {*} values - It's can't be an array
 */
const removeObjectProps = (obj, values) => {
  if (hasAllValues([obj, values]) && isCommonObject(obj)) {
    if (isArray(values)) {
      for (let i = 0; i < values.length; i++) {
        if (obj.hasOwnProperty(values[i])) delete obj[values[i]];
      }
    } else if (obj.hasOwnProperty(values)) delete obj[values];

    return { ...obj };
  }
  return obj;
};

/**
 * get elements of object
 * @param {object} obj - object
 * @param {*} values - It's can't be an array
 */
const getObjectProps = (obj, values) => {
  if (hasAllValues([obj, values]) && isCommonObject(obj)) {
    if (isArray(values)) {
      let newObj = {};
      for (let i = 0; i < values.length; i++) {
        if (obj.hasOwnProperty(values[i])) newObj[values[i]] = obj[values[i]];
        else newObj[values[i]] = null;
      }
      return { ...newObj };
    } else
      return obj.hasOwnProperty(values)
        ? { [values]: obj[values] }
        : { [values]: null };
  }
  return obj;
};

/**
 * get value number from string |
 * ex: "jay 1df 34 soft" = 134
 * @param {string} value
 */
const getOnlyNumber = value => {
  const regExp = /[^0-9]/gi;
  let val = value.replace(regExp, "");
  return Number(val);
};

/**
 * generates a unique objectId like "5db7e872dab3eb3d7cc44080"
 */
const generateObjectId = () => new mongoose.Types.ObjectId();

/**
 * get the first position of an array of objects by field and value
 * @param {array} array
 * @param {string} field - object prop
 * @param {*} value - value prop
 */
const getElementPos = (array, field, value) => {
  if (
    hasAllValues([array, field, value]) &&
    isArray(array) &&
    isString(field)
  ) {
    let pos = -1;
    array.find((val, index) => {
      pos = index;
      return val[field] === value;
    });
    return pos;
  }
  return -1;
};

/**
 * Remove repeated elements from array
 * @param {array} array
 */
const uniqueArray = array => {
  if (hasValue(array) && isArray(array))
    return array.filter((value, index, self) => self.indexOf(value) === index);
  return array;
};

/**
 * remove repeated elements from an array of objects by property
 * @param {array} array
 * @param {*} value - It can't be a iterator value
 */
const uniqueArrayObjectBy = (array, value) => {
  if (hasAllValues([array, value]) && isArray(array))
    return array.filter((val, index, self) => {
      return (
        array[index][value] === self[index][value] &&
        getElementPos(self, value, val[value]) === index
      );
    });
  return array;
};

/**
 * check if exist module
 * @param {string} value - module name like "http"
 */
const existModule = value => {
  if (hasValue(value) && isString(value)) {
    try {
      require.resolve(value);
      return true;
    } catch (error) {
      return false;
    }
  } else return false;
};
// on version 2
const putRules = config => {
  let { dataKeys, data, ruleFields, ruleConfig, validations } = config,
    errorFields = {},
    newData = {};

  for (const element of dataKeys) {
    let value = data[element],
      rule = ruleFields[element],
      { output = null } = ruleConfig,
      outputValue = "";
    if (hasValue(value)) {
      if (hasValue(output) && isCommonObject(output)) {
        if (inObject(output, element)) outputValue = output[element];
        else outputValue = element;
      }

      if (rule.type === getTypeof(value)) {
        if (hasValue(rule.needFields) && isArray(rule.needFields)) {
          let check = hasValueAllProps(data, rule.needFields);
          if (!check.ok) {
            errorFields[element] = `this field needs ${JSON.stringify(
              check.except
            )}`;
            continue;
          }
        }

        if (hasValue(rule.accepts) && isArray(rule.accepts)) {
          if (inArray(rule.accepts, value)) {
            newData[outputValue] = value;
            continue;
          } else {
            errorFields[element] = `Not allowed value`;
            continue;
          }
        }

        if (hasValue(rule.validate)) {
          if (hasValue(validations)) {
            let fieldValidate = rule.validate;
            if (isArray(fieldValidate)) {
              let success = false;
              for (const validate of fieldValidate) {
                let result = validations({ type: validate, value });

                if (isCommonObject(result)) {
                  if (result.ok) {
                    newData[outputValue] = inObject(result.value)
                      ? result.value
                      : value;
                    success = true;
                  }
                  continue;
                } else {
                  errorFields[element] = "I DON'T KNOW WHAT TO DO!!";
                }
              }
              if (!success) {
                let result = validations({ type: fieldValidate[0], value });

                if (!result.ok) {
                  errorFields[element] = result.message || "Incorrect value!";
                }
              }
            } else {
              let result = validations({ type: fieldValidate, value });

              if (isCommonObject(result)) {
                if (result.ok) {
                  newData[outputValue] = inObject(result.value)
                    ? result.value
                    : value;
                  continue;
                } else {
                  errorFields[element] = result.message || "Incorrect value!";
                  continue;
                }
              } else {
                errorFields[
                  element
                ] = `I don't know validation "${fieldValidate}"!`;
                continue;
              }
            }
          }
        }

        newData[outputValue] = value;
        continue;
      } else {
        errorFields[element] = `The value must be ${rule.type}!`;
        continue;
      }
    } else {
      if (hasValue(rule.required)) {
        errorFields[element] = "Required field!";
        continue;
      }

      if (hasValue(rule.importantFields) && isArray(rule.importantFields)) {
        let check = hasValueAllProps(data, rule.importantFields);
        if (!check.ok) {
          errorFields[
            element
          ] = `Without this field it is mandatory to have ${JSON.stringify(
            check.except
          )}`;
          continue;
        }
      }

      if (hasValue(rule.default)) {
        newData[outputValue] = rule.default;
        continue;
      }
    }
  }
  if (hasValue(errorFields))
    return {
      ok: false,
      exec: true,
      errors: errorFields,
      keys: Object.getOwnPropertyNames(errorFields)
    };
  else return { ok: true, exec: true, data: newData };
};

// on version 2
/**
 * validates or filters all data according to a rule
 * @param {object} datas - Object with: {service: "string", data: "commonObject", rules: "commonObject", validations: ?"function"}
 */
const wallFilters = datas => {
  let { service, data, rules, validations } = datas;
  if (
    hasAllValues([service, data, rules]) &&
    isString(service) &&
    isAllCommonObject([data, rules])
  ) {
    if (inObject(rules, service)) {
      let workRules = rules[service],
        ruleFields = workRules.fields,
        ruleConfig = workRules.config,
        ruleArrayProps = Object.getOwnPropertyNames(ruleFields);

      if (inObject(ruleConfig, "minFields")) {
        if (ruleArrayProps.length < ruleConfig.minFields)
          return {
            ok: false,
            exec: false,
            message: "All fields are mandatory!"
          };
      }
      let newData = getObjectProps(data, ruleArrayProps);
      return putRules({
        dataKeys: ruleArrayProps,
        data: newData,
        ruleFields,
        ruleConfig,
        validations
      });
    }

    return {
      ok: false,
      exec: false,
      message: `"${service}" service not found!`
    };
  }

  return { ok: false, exec: false, message: "I don't know what to do!" };
};

module.exports = {
  isString,
  isAllString,
  isNumber,
  isCommonNumber,
  isAllCommonNumber,
  isBoolean,
  isAllBoolean,
  isArray,
  isAllArray,
  isObject,
  isCommonObject,
  isAllCommonObject,
  isObjectId,
  isAllObjectId,
  isAll,
  isPhoneNumber,
  isEmail,
  isUsername,
  inArray,
  inArrayAnyValue,
  inObject,
  inObjectAnyProp,
  hasValue,
  hasAllValues,
  hasValueAllProps,
  justifySpaceWords,
  capitalizeText,
  checkMinValueEachWords,
  checkMaxValueEachWords,
  checkMinAndMaxValueEachWord,
  correctName,
  getTypeof,
  getArrayElements,
  getElementPos,
  getObjectProps,
  getOnlyNumber,
  generateObjectId,
  removeArrayElements,
  removeObjectProps,
  uniqueArray,
  uniqueArrayObjectBy,
  existModule,
  wallFilters
};
