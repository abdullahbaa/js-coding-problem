function calculateTax(income, expense) {
    // Validate inputs
    if (income < 0 || expense < 0 || income <= expense) {
      return "Invalid input: Income must be greater than or equal to expense, and both must be non-negative.";
    }
    
    // Calculate profit
    let profit = income - expense;
  
    // Calculate tax (20% of profit)
    let tax = profit * 0.2;
  
    return tax;
  }
  
  // Example usage:
  let income = 50000; // মাসিক আয়
  let expense = 30000; // মাসিক খরচ
  let tax = calculateTax(income, expense);
  console.log("Tax to be paid:", tax);