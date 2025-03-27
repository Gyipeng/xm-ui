/*
 * @Author: gyp
 * @Date: 2025-03-24 14:17:25
 * @LastEditTime: 2025-03-25 16:10:52
 * @LastEditors: gyp
 * @Description:
 *
 * @FilePath: /xm-ui/packages/cron/src/cronUtil.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
export function genCornString(cron) {
  return cron
    .split(" ")
    .slice(0, 5)
    .join(" ");
}

export function provideWeekMenuForWeek(cron) {
  return [
    {
      label: "星期一",
      value: "1"
    },
    {
      label: "星期二",
      value: "2"
    },
    {
      label: "星期三",
      value: "3"
    },
    {
      label: "星期四",
      value: "4"
    },
    {
      label: "星期五",
      value: "5"
    },
    {
      label: "星期六",
      value: "6"
    },
    {
      label: "星期日",
      value: "7"
    }
  ];
}

export function provideMonthMenuForYear(cron) {
    return Array.from({ length: 12 }).map((_, index) => {
        return {
        label: index + 1 + "月",
        value: index + 1 + ""
        };
    });
}

export function provideDayMenuForMonth() {
    return Array.from({ length: 31 }).map((_, index) => {
        return {
        label: index + 1 + "日",
        value: index + 1 + ""
        };
    });
}

export function provideCornDayForMonthExpression() {
  return "0 0 0 1 * ? *"
}

export function provideCornHoursForDayExpression() {
    return "0 0 1 * * ? *"
}

export function provideCornWeekForWeekExpression() {
  return "0 0 0 0 0 1 *"
}

export function provideDefaultCornExpression(type) {
    switch (type) {
        case "month":
        return provideCornDayForMonthExpression();
        case "day":
        return provideCornHoursForDayExpression();
        case "week":
        return provideCornWeekForWeekExpression();
        case "":
        return "";
    }
}

export function provideDefaultCornMenu (type) {
    switch (type) {
        case "year":
        return provideMonthMenuForYear();
        case "month":
        return provideDayMenuForMonth();
        case "week":
        return provideWeekMenuForWeek();
    }
}

