
// START JAVASCRIPT
;(function() {;
var ρσ_modules = {};
var y_eq, y, pos1, pos2, pos3, vel1, vel2, vel3, t, mass, k, case_id, running, g_pos, g_vel;
ρσ_modules.pythonize = {};

(function(){
    function strings() {
        var string_funcs, exclude, name;
        string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
        if (!arguments.length) {
            exclude = (function(){
                var s = ρσ_set();
                s.jsset.add("split");
                s.jsset.add("replace");
                return s;
            })();
        } else if (arguments[0]) {
            exclude = Array.prototype.slice.call(arguments);
        } else {
            exclude = null;
        }
        if (exclude) {
            string_funcs = string_funcs.difference(set(exclude));
        }
        var ρσ_Iter0 = string_funcs;
        ρσ_Iter0 = ((typeof ρσ_Iter0[Symbol.iterator] === "function") ? (ρσ_Iter0 instanceof Map ? ρσ_Iter0.keys() : ρσ_Iter0) : Object.keys(ρσ_Iter0));
        for (var ρσ_Index0 of ρσ_Iter0) {
            name = ρσ_Index0;
            (ρσ_expr_temp = String.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name];
        }
    };
    if (!strings.__module__) Object.defineProperties(strings, {
        __module__ : {value: "pythonize"}
    });

    ρσ_modules.pythonize.strings = strings;
})();
async function __main__() {
"use strict";
    var display = canvas;
    var scene = canvas();

    function round(num, n=0) {return Number(num.toFixed(n))}

    var version, print, arange, __name__, type, ρσ_ls, scene, block_size, l0, initial_compression, dt, g, mass, k, case_id, floor, spring_base_y, spring, block, g_pos, g_vel, running, t;
    version = ρσ_list_decorate([ "3.2", "glowscript" ]);
    Array.prototype['+'] = function(r) {return this.concat(r)}
    Array.prototype['*'] = function(r) {return __array_times_number(this, r)}
    window.__GSlang = "vpython";
    print = GSprint;
    arange = range;
    __name__ = "__main__";
    type = pytype;
    var strings = ρσ_modules.pythonize.strings;

    strings();
    "4";
    scene = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({title: "Vertical Spring–Mass System", width: 900, height: 600, background: color.black})]);
    "7";
    scene.center = vector(0, .25, 0);
    "9";
    block_size = .1;
    "10";
    l0 = .2;
    "11";
    initial_compression = .1;
    "12";
    dt = .001;
    "13";
    g = 9.8;
    "15";
    mass = .06;
    "16";
    k = 8;
    "17";
    case_id = 1;
    "19";
    floor = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({pos: vector(0, 0, 0), size: vector(.35, .04, .35), color: color.green})]);
    "23";
    spring_base_y = floor.pos.y["+"](floor.size.y["/"](2));
    "25";
    async function compute_equilibrium() {
        var ρσ_ls, x_eq;
        "26";
        "27";
        x_eq = mass["*"](g)["/"](k);
        "28";
        y_eq = spring_base_y["+"](l0["-"](1["*"](x_eq)))["+"](block_size["/"](2));
        "29";
        y = initial_compression["-"](1["*"](x_eq));
    };
    if (!compute_equilibrium.__module__) Object.defineProperties(compute_equilibrium, {
        __module__ : {value: null}
    });

    "31";
    (await compute_equilibrium());
    "33";
    spring = ρσ_interpolate_kwargs.call(this, helix, [ρσ_desugar_kwargs({pos: vector(0, spring_base_y, 0), axis: vector(0, l0, 0), radius: .04, coils: 20, thickness: .008})]);
    "39";
    block = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({pos: vector(0, y_eq["+"](y), 0), size: vector(block_size, block_size, block_size), color: color.orange})]);
    "43";
    block.v = vector(0, 0, 0);
    "45";
    g_pos = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({title: "Position vs Time", xtitle: "Time (s)", ytitle: "Displacement (m)", width: 500, height: 250})]);
    "50";
    g_vel = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({title: "Velocity vs Time", xtitle: "Time (s)", ytitle: "Velocity (m/s)", width: 500, height: 250})]);
    "55";
    async function create_curves() {
        "56";
        "57";
        pos1 = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({graph: g_pos, color: color.cyan})]);
        "58";
        pos2 = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({graph: g_pos, color: color.orange})]);
        "59";
        pos3 = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({graph: g_pos, color: color.green})]);
        "60";
        vel1 = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({graph: g_vel, color: color.cyan})]);
        "61";
        vel2 = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({graph: g_vel, color: color.orange})]);
        "62";
        vel3 = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({graph: g_vel, color: color.green})]);
    };
    if (!create_curves.__module__) Object.defineProperties(create_curves, {
        __module__ : {value: null}
    });

    "64";
    (await create_curves());
    "66";
    running = false;
    "67";
    t = 0;
    "69";
    async function reset_motion() {
        "70";
        "71";
        t = 0;
        "72";
        block.v = vector(0, 0, 0);
        "73";
        (await compute_equilibrium());
        "74";
        block.pos.y = y_eq["+"](y);
        "75";
        spring.axis = vector(0, block.pos.y["-"](1["*"](block_size)["/"](2))["-"](1["*"](spring.pos.y)), 0);
    };
    if (!reset_motion.__module__) Object.defineProperties(reset_motion, {
        __module__ : {value: null}
    });

    "81";
    async function reset_all(b) {
        "82";
        "83";
        running = false;
        "84";
        mass = .06;
        "85";
        k = 8;
        "86";
        case_id = 1;
        "87";
        g_pos.remove();
        "88";
        g_vel.remove();
        "90";
        (await create_graphs());
    };
    if (!reset_all.__argnames__) Object.defineProperties(reset_all, {
        __argnames__ : {value: ["b"]},
        __module__ : {value: null}
    });

    "92";
    async function create_graphs() {
        "93";
        "94";
        g_pos = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({title: "Position vs Time", xtitle: "Time (s)", ytitle: "Displacement (m)", width: 500, height: 250})]);
        "98";
        g_vel = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({title: "Velocity vs Time", xtitle: "Time (s)", ytitle: "Velocity (m/s)", width: 500, height: 250})]);
        "102";
        (await create_curves());
        "103";
        (await reset_motion());
    };
    if (!create_graphs.__module__) Object.defineProperties(create_graphs, {
        __module__ : {value: null}
    });

    "105";
    async function start_sim(b) {
        "106";
        "107";
        running = true;
    };
    if (!start_sim.__argnames__) Object.defineProperties(start_sim, {
        __argnames__ : {value: ["b"]},
        __module__ : {value: null}
    });

    "109";
    async function stop_sim(b) {
        "110";
        "111";
        running = false;
    };
    if (!stop_sim.__argnames__) Object.defineProperties(stop_sim, {
        __argnames__ : {value: ["b"]},
        __module__ : {value: null}
    });

    "113";
    async function case1(b) {
        "114";
        "115";
        mass = .06;
        "116";
        k = 8;
        "117";
        case_id = 1;
        "118";
        (await reset_motion());
    };
    if (!case1.__argnames__) Object.defineProperties(case1, {
        __argnames__ : {value: ["b"]},
        __module__ : {value: null}
    });

    "120";
    async function case2(b) {
        "121";
        "122";
        mass = .06;
        "123";
        k = 16;
        "124";
        case_id = 2;
        "125";
        (await reset_motion());
    };
    if (!case2.__argnames__) Object.defineProperties(case2, {
        __argnames__ : {value: ["b"]},
        __module__ : {value: null}
    });

    "127";
    async function case3(b) {
        "128";
        "129";
        mass = .12;
        "130";
        k = 8;
        "131";
        case_id = 3;
        "132";
        (await reset_motion());
    };
    if (!case3.__argnames__) Object.defineProperties(case3, {
        __argnames__ : {value: ["b"]},
        __module__ : {value: null}
    });

    "134";
    ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Start", bind: start_sim})]);
    "135";
    ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Stop", bind: stop_sim})]);
    "136";
    ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Reset", bind: reset_all})]);
    "137";
    scene.append_to_caption("\n");
    "138";
    ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Reference case", bind: case1})]);
    "139";
    ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Spring constant doubled", bind: case2})]);
    "140";
    ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Mass doubled", bind: case3})]);
    "142";
    async function update() {
        var ρσ_ls, a;
        "143";
        "144";
        a = 1["-u"]()["*"](k["/"](mass))["*"](y);
        "145";
        block.v.y=block.v.y["+"](a["*"](dt));
        "146";
        y=y["+"](block.v.y["*"](dt));
        "147";
        block.pos.y = y_eq["+"](y);
        "148";
        spring.axis = vector(0, block.pos.y["-"](1["*"](block_size)["/"](2))["-"](1["*"](spring.pos.y)), 0);
        "154";
        if ((case_id === 1 || typeof case_id === "object" && ρσ_equals(case_id, 1))) {
            "155";
            pos1.plot(t, y);
            "156";
            vel1.plot(t, block.v.y);
            "157";
        } else if ((case_id === 2 || typeof case_id === "object" && ρσ_equals(case_id, 2))) {
            "158";
            pos2.plot(t, y);
            "159";
            vel2.plot(t, block.v.y);
            "160";
        } else if ((case_id === 3 || typeof case_id === "object" && ρσ_equals(case_id, 3))) {
            "161";
            pos3.plot(t, y);
            "162";
            vel3.plot(t, block.v.y);
        }
        "164";
        t=t["+"](dt);
    };
    if (!update.__module__) Object.defineProperties(update, {
        __module__ : {value: null}
    });

    "166";
    while (true) {
        "167";
        (await rate(500));
        "168";
        if (running) {
            "169";
            update();
        }
    }
};
if (!__main__.__module__) Object.defineProperties(__main__, {
    __module__ : {value: null}
});

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT

//--><!]]></script>
