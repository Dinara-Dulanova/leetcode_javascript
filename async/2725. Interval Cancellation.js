var cancellable = function(fn, args, t) {
    fn(...args);
    let int = setInterval(() => {
        fn(...args)
    }, t)

    return function cancelFn() {
        clearInterval(int)
    }
};
