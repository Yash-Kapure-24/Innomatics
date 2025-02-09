console.log("1. ATM Withdrawal System \n\n");

const atmWithdrawal = (balense, amount, pin, enteredPin) => {
    if (enteredPin !== pin) {
        return "Incorrext pin";
    }

    if (amount > balense) {
        return "Insufficient Balense";
    }

    if (amount % 100 !== 0) {
        return "Amount should be multiple of 100";
    }

    balense -= amount;
    return "Withdrawal successful. Remaining balense: " + balense;
}

console.log(atmWithdrawal(5000, 1700, 1234, 1234));
console.log(atmWithdrawal(5000, 100, 1234, 1211));
console.log(atmWithdrawal(5000, 6000, 1234, 1234));
console.log(atmWithdrawal(5000, 1000, 1234, 1234));

console.log("\n-----------------------------------\n\n");


console.log("2. Online Shopping Discount & Free Shipping \n\n");


function calculateFinalAmount(orderAmount) {
    let discount = 0;

    if (orderAmount > 1000) {
        discount = 0.20;
    } else if (orderAmount >= 500) {
        discount = 0.10;
    }

    let discountedAmount = orderAmount - (orderAmount * discount);

    let shippingCost = discountedAmount > 50 ? 0 : 10;

    let finalAmount = discountedAmount + shippingCost;

    return finalAmount;
}

console.log(calculateFinalAmount(1200));
console.log(calculateFinalAmount(700));
console.log(calculateFinalAmount(400));
console.log(calculateFinalAmount(40));

console.log("\n-----------------------------------\n\n");


console.log("3. Student Grading System with Extra Credit");

function calculateGrade(marks, attendance) {

    if (attendance > 90) {
        marks += 5;
    }

    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(calculateGrade(85, 95));
console.log(calculateGrade(78, 80));
console.log(calculateGrade(59, 92));

console.log("\n-----------------------------------\n\n");

console.log("4. Smart Traffic Light System");

function trafficLightControl(density) {
    if (density === "Heavy Traffic") {
        return 60;
    } else if (density === "Moderate Traffic") {
        return 40;
    } else if (density === "Light Traffic") {
        return 20;
    } else {
        return "Invalid traffic density";
    }
}

console.log(trafficLightControl("Heavy Traffic"));
console.log(trafficLightControl("Moderate Traffic"));
console.log(trafficLightControl("Light Traffic"));
console.log(trafficLightControl("No Traffic"));

console.log("\n-----------------------------------\n\n");

console.log("5. Movie Ticket Pricing with Time and Age Discount");

function calculateTicketPrice(age, showTime) {
    let price = 120;
    if (showTime < 17) {
        return price *= 0.8;
    } else if (age >= 60) {
        return price *= 0.7;
    } else if (age <= 12) {
        return price *= 0.6;
    }
}

console.log(calculateTicketPrice(65, 14));
console.log(calculateTicketPrice(10, 19));
console.log(calculateTicketPrice(8, 14));


console.log("\n-----------------------------------\n\n");

console.log("6. Job Application Filter");

function isEligibleForJob(age, experience, qualification) {

    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree" || qualification === "Master's Degree") {
        return "Eligible for the job";
    } else {
        return "Not eligible for the job";
    }
}

console.log(isEligibleForJob(25, 3, "Bachelor's Degree"));
console.log(isEligibleForJob(20, 1, "Bachelor's Degree"));
console.log(isEligibleForJob(30, 3, "Bachelor's Degree"));
console.log(isEligibleForJob(40, 5, "Master's Degree"));

console.log("\n-----------------------------------\n\n");

console.log("7. E-commerce Coupon Redemption");

function applyCoupon(orderAmount, couponCode) {

    let discount = 0;
    let freeShipping = false;

    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        discount = orderAmount * 0.10;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        freeShipping = true;
    }

    let finalAmount = orderAmount - discount;

    return {
        finalAmount: finalAmount.toFixed(2),
        freeShipping: freeShipping
    };
}

console.log(applyCoupon(600, "DISCOUNT10"));
console.log(applyCoupon(250, "FREESHIP"));
console.log(applyCoupon(150, "DISCOUNT10"));
console.log(applyCoupon(700, "FREESHIP"));


console.log("\n--------------------\n\n")

console.log("8. Fitness Membership Plan");

function applyCoupon(orderAmount, couponCode) {
    let discount = 0;
    let freeShipping = false;

    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        discount = orderAmount * 0.10;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        freeShipping = true;
    }

    let finalAmount = orderAmount - discount;

    return {
        finalAmount: finalAmount.toFixed(2),
        freeShipping: freeShipping
    };
}

console.log(applyCoupon(600, "DISCOUNT10"));
console.log(applyCoupon(250, "FREESHIP"));
console.log(applyCoupon(150, "DISCOUNT10"));
console.log(applyCoupon(700, "FREESHIP"));

console.log("\n--------------------\n\n")

console.log("9. Electricity Bill Calculation with Peak Hours");

function calculateElectricityBill(units, timeOfDay) {
    let rate;

    if (units <= 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }

    if (timeOfDay >= 20 || timeOfDay < 8) {
        rate *= 1.1;
    }

    return units * rate;
}

console.log(calculateElectricityBill(120, 21));
console.log(calculateElectricityBill(250, 10));
console.log(calculateElectricityBill(350, 5)); 

console.log("\n--------------------\n\n");

console.log("10. Flight Ticket Booking System");

function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let classCharge = 0;
    let luggageCharge = 0;
    let discount = 0;

    if (classType === "business") {
        classCharge = 200;
    } else if (classType === "first") {
        classCharge = 500;
    }

    if (luggageWeight > 20) {
        let extraWeight = luggageWeight - 20;
        luggageCharge = Math.ceil(extraWeight / 10) * 50;
    }

    let totalFare = baseFare + classCharge + luggageCharge;

    if (isStudent) {
        discount = totalFare * 0.15;
    } else if (isSenior) {
        discount = totalFare * 0.10;
    }

    return totalFare - discount;
}

console.log(calculateFlightFare("economy", 25, true, false));  
console.log(calculateFlightFare("business", 30, false, true));
console.log(calculateFlightFare("first", 20, false, false));  
