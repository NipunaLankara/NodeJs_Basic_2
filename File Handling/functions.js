const math = (num1, num2, num3, num4) => {

    let total = num1 + num2;

    if (num3) {
        total += num3 * 2;

        if (num4) {
            total = total - num4;
        }
    }
    return total;
}

export default math;