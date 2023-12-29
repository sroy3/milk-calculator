# Milk Calculator

This Node.js program calculates the date at which you can stop breastfeeding / pumping and totally rely on stored milk to 
feed your child until the date you want to stop giving breast milk.

This might not be a 100% accurate, so either fine tune the data to better fit your child's needs, set the data values higher to allow for 
a positive error of margin, or have a backup plan (use formula).

## To Use

Replace the values inside `ARGUMENTS` with according to your situation. Save the file and run `node index.js`. Change `MAX_MILK_AMOUNT_OZ` 
and / or `MAX_MILK_AMOUT_ML` to the data you want to use if needed. These represent the maximum daily amount of milk your child should consume 
each month (the first value being month one and the last value being the 12th month). After the 12th month, the value of the 12th month is used.

## To Do

- Add visual interface
