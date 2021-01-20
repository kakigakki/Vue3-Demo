const Handler = {
    get: (target, prop) => {
        const res = Reflect.get(target, prop)
        console.log("拦截了get方法");
        return res
    },
    set: (target, prop, value) => {
        Reflect.set(target, prop, value)
        console.log("拦截了set方法");
    },
    deleteProperty: (target, prop) => {
        Reflect.deleteProperty(target, prop)
        console.log("拦截了deleteProperty方法");
    }
}

function shallowReactive(target) {
    if (target && typeof target === "object") {
        return new Proxy(target, Handler)
    }
    return target
}



function reactive(target) {
    if (target && typeof target === "object") {
        //如何是数组
        if (Array.isArray(target)) {
            target.forEach((item, index, arr) =>
                arr[index] = reactive(item)
            )
        } else {
            //如果是对象
            for (const key in target) {
                target[key] = reactive(target[key])
            }
        }
        return new Proxy(target, Handler)
    }
    return target
}

const user = { name: "kaki", age: 24, gf: { name: "mikina", age: 25 }, hobby: ["busket", { name: "swiming", type: "frog" }] }

//const shallowUser = shallowReactive(user)
const reactiveUser = reactive(user)

// shallowUser.gf.name = "mikina2"
// shallowUser.age
// delete shallowUser.name


reactiveUser.hobby[1].name = "mikina2"
reactiveUser.age
delete reactiveUser.name
console.log(reactiveUser);