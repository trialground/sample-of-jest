module.exports = {
    heavyTasks: num => {
        // Long running CPU intensive tasks
        while (num > 1) {
            num = Math.sqrt(num)
        }
        return num
    }
};
