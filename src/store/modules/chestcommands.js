const { dialog } = window.require("electron").remote;
const state = {
    copy: {},
    show: false,
    x: null,
    y: null,
    menu_file: "",
    menu: {
        "menu-settings": {
            name: "&bMCBOX &c&lChestCommands &dEditor",
            rows: 6,
            "auto-refresh": null,
            commands: [],
            "open-actions": [],
            "open-with-item": {
                material: "",
                "left-click": false,
                "right-click": true,
            },
        },
    },
}
const getters = {
    get_rows(state) {
        return state.menu["menu-settings"].rows;
    },
}
const mutations = {
    delete_card(state, xy) {
        var menu_all = JSON.parse(JSON.stringify(state.menu));
        for (let key in menu_all) {
            if (key != "" && key != undefined && key != "menu-settings") {
                if (
                    menu_all[key]["POSITION-X"] == xy[0] &&
                    menu_all[key]["POSITION-Y"] == xy[1]
                ) {
                    delete menu_all[key];
                    state.menu = {};
                    state.menu = menu_all;
                    return;
                }
            }
        }
    },
    copy_card(state, xy) {
        var menu_all = JSON.parse(JSON.stringify(state.menu));
        for (let key in menu_all) {
            if (key != "" && key != undefined && key != "menu-settings") {
                if (
                    menu_all[key]["POSITION-X"] == xy[0] &&
                    menu_all[key]["POSITION-Y"] == xy[1]
                ) {
                    state.copy = menu_all[key];
                    return;
                }
            }
        }
    },
    async paste_card(state, xy) {
        var menu_all = JSON.parse(JSON.stringify(state.menu));
        var k = true;
        for (let key in menu_all) {
            if (key != "" && key != undefined && key != "menu-settings") {
                if (
                    menu_all[key]["POSITION-X"] == xy[0] &&
                    menu_all[key]["POSITION-Y"] == xy[1]
                ) {
                    await dialog
                        .showMessageBox({
                            type: "info",
                            title: "警告",
                            buttons: ["确认", "取消"],
                            defaultId: 0,
                            cancelId: 0,
                            message: "监测到当前位置已有内容,是否继续粘贴!",
                            Integer: "1",
                        })
                        .then((result) => {
                            if (result.response != 1) {
                                k = true;
                                return;
                            } else {
                                k = false;
                                return;
                            }
                        });
                }
            }
        }
        if (k) {
            var paste_copy = JSON.parse(JSON.stringify(state.copy));
            paste_copy["POSITION-X"] = xy[0];
            paste_copy["POSITION-Y"] = xy[1];
            menu_all[xy[2]] = paste_copy;
            state.menu = menu_all;
        }
        var menu_ony = state.menu;
        state.menu = menu_ony;
    },
    upfile(state, files) {
        const yaml = require("js-yaml");

        state.menu = {
            "menu-settings": {
                name: "",
                rows: 6,
                "auto-refresh": null,
                commands: [],
                "open-with-item": {
                    material: "",
                    "left-click": false,
                    "right-click": false,
                },
            },
        };
        const files_json = yaml.load(files, "utf-8");

        state.menu = files_json;
        state.menu["menu-settings"].rows = files_json["menu-settings"].rows;
        state.menu["menu-settings"].name = files_json["menu-settings"].name;
        if (
            files_json["menu-settings"]["auto-refresh"] != undefined &&
            files_json["menu-settings"]["auto-refresh"] != null &&
            files_json["menu-settings"]["auto-refresh"] != ""
        ) {
            state.menu["menu-settings"]["auto-refresh"] =
                files_json["menu-settings"]["auto-refresh"];
        } else {
            state.menu["menu-settings"]["auto-refresh"] = null;
        }
        if (
            files_json["menu-settings"].commands != "" &&
            files_json["menu-settings"].commands != undefined &&
            files_json["menu-settings"].commands != null
        ) {
            state.menu["menu-settings"].commands =
                files_json["menu-settings"].commands;
        } else {
            state.menu["menu-settings"].commands = [];
        }
        if (
            files_json["menu-settings"]["open-with-item"] != undefined &&
            files_json["menu-settings"]["open-with-item"] != null &&
            files_json["menu-settings"]["open-with-item"] != ""
        ) {
            if (
                files_json["menu-settings"]["open-with-item"].material != undefined &&
                files_json["menu-settings"]["open-with-item"].material != null
            ) {
                state.menu["menu-settings"]["open-with-item"].material =
                    files_json["menu-settings"]["open-with-item"].material;
            } else {
                state.menu["menu-settings"]["open-with-item"].material = "";
            }
            if (
                files_json["menu-settings"]["open-with-item"]["left-click"] !=
                undefined &&
                files_json["menu-settings"]["open-with-item"]["left-click"] != null
            ) {
                state.menu["menu-settings"]["open-with-item"]["left-click"] =
                    files_json["menu-settings"]["open-with-item"]["left-click"];
            } else {
                state.menu["menu-settings"]["open-with-item"]["left-click"] = false;
            }
            if (
                files_json["menu-settings"]["open-with-item"]["right-click"] !=
                undefined &&
                files_json["menu-settings"]["open-with-item"]["right-click"] != null
            ) {
                state.menu["menu-settings"]["open-with-item"]["right-click"] =
                    files_json["menu-settings"]["open-with-item"]["right-click"];
            } else {
                state.menu["menu-settings"]["open-with-item"]["left-click"] = false;
            }
        } else {
            state.menu["menu-settings"]["open-with-item"] = {
                material: "",
                "left-click": false,
                "right-click": false,
            };
        }
    },
    menu_file(state, filename) {
        state.menu_file = filename;
    },
    menu_main_updata(state, menu_main_updata) {
        state.menu["menu-settings"] = JSON.parse(
            JSON.stringify(menu_main_updata)
        );
    },
    xy(state, xy) {
        let xys = xy;
        state.x = xys[0];
        state.y = xys[1];
        xys = null;
    },
    card_exist(state, data) {
        this.show = false;
        var all_menu = JSON.parse(JSON.stringify(state.menu));
        const all_data = JSON.parse(JSON.stringify(data));
        for (let key in all_menu) {
            if (key != "menu-settings" && key != "" && key != undefined) {
                if (all_data[0] != "" && all_data[0] != undefined) {
                    if (
                        key == all_data[0] &&
                        all_menu[key]["POSITION-X"] == all_data[1]["POSITION-X"] &&
                        all_menu[key]["POSITION-Y"] == all_data[1]["POSITION-Y"]
                    ) {
                        all_menu[all_data[0]] = all_data[1];
                    } else if (
                        key != all_data[0] &&
                        all_menu[key]["POSITION-X"] == all_data[1]["POSITION-X"] &&
                        all_menu[key]["POSITION-Y"] == all_data[1]["POSITION-Y"]
                    ) {
                        all_menu[all_data[0]] = all_data[1];
                        delete all_menu[key];
                    } else {
                        all_menu[all_data[0]] = all_data[1];
                    }
                }
            } else if (Object.keys(all_menu).length < 2) {
                all_menu[all_data[0]] = all_data[1];
            }
        }
        state.menu = all_menu;
        all_menu = null;
    },
}
const actions = {}
export default ({
    namespaced: true,
    state,
    getters,
    mutations,
    actions
});
