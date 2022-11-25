import fetchComponent from "@/utils/fetchComponent";

const currencyOptions = {
    symbol: "$",
    decimal: ".",
    thousand: ",",
    format: "",
};

const dateFormat = "d/m/Y";

export default {
    __(value, type) {
        return value;
    },
    uppercase(val) {
        if (typeof val === "string") {
            return val.toUpperCase();
        }
        return val;
    },
    money(val) {
        if (typeof val === "number") {
            return `${val.toFixed(2)}`;
        }
    },
    formatDate(d) {
        if (!d) {
            return "";
        }

        var date = new Date(d),
            month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear();

        if (month.toString().length < 2) {
            month = "0" + month;
        }

        if (day.toString().length < 2) {
            day = "0" + day;
        }

        switch (dateFormat) {
            case "d/m/Y": // -- 31/12/2020
                return [day, month, year].join("/");

            case "m/d/Y": // -- 12/31/2020
                return [month, day, year].join("/");

            case "m-d-Y": // -- 12-31-2020
                return [month, day, year].join("-");

            case "d-m-Y": // -- 31-12-2020
                return [day, month, year].join("-");

            case "Y-m-d": // -- 2020-12-31
                return [year, month, day].join("-");

            case "d.m.Y": // -- 31.12.2020
                return [day, month, year].join(".");

            default:
                return date.toDateString().replace(/^\S+\s/, "");
        }
    },

    fetchComponent(comp_path) {

        if (!comp_path.includes("/", 1)) {
            comp_path =  comp_path + '/index.vue';
        } else if (Array.isArray(comp_path)) {
            comp_path = comp_path[0];
        }

        return fetchComponent(comp_path);
    },

    formatNumber(n) {
        var ending = ["k", "m", "b", "t"];

        var n_str = n.toString();

        if (n_str.length < 4) {
            return n;
        } else {
            //return n_str[0] + ending[Math.floor((n_str.length - 1) / 3) - 1];
            return `${n_str[0]}${n_str[1] != "0" ? `.${n_str[1]}` : ""}${ending[Math.floor((n_str.length - 1) / 3) - 1]
                }`;
        }
    },
};
