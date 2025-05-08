/**
 * 범용적으로 사용하는 Utils...
 */
export const utils = {
  log(...data: any[]) {
    // if (webConfig.isLog) {
    //   //console.log(utils.log.caller);
    //   // const caller = new Error().stack?.split("at ")[3].split(" ")[0];
    //   if (webConfig.isCallerLog) {
    //     const error = new Error();
    //     const tokens = error.stack?.split('at ');
    //     if (tokens !== undefined) {
    //       if (tokens[2]?.startsWith('Object.')) {
    //         //console.info(`caller : ${tokens[2]?.split(" ")[0]}`);
    //         console.log(`caller : ${tokens[2]?.trim()}`);
    //       } else if (tokens[3]?.includes('Proxy.')) {
    //         //console.info(`caller : ${tokens[3]?.split(" ")[1]}`);
    //         console.log(`caller : ${tokens[3]?.trim()}`);
    //       } else {
    //         console.log(`caller : ${tokens[2]?.trim()}`);
    //       }
    //     }
    //   }

    data.forEach((element) => {
      console.log(element);
    });
    // }
  },
  /**
   * string, object, array empty 체크
   * @param value
   * @returns
   */
  isEmpty(value: any): boolean {
    if (value === undefined || value === null) {
      return true;
    }

    // string일때 체크
    if (typeof value === 'string' && (value === '' || value.trim() === '')) {
      return true;
    }

    // object일때 체크
    if (typeof value === 'object' && Object.keys(value).length < 1) {
      return true;
    }

    // array일때 체크
    if (Array.isArray(value) && value.length < 1) {
      return true;
    }

    return false;
  }
};
