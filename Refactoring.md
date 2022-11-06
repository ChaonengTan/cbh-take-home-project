# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Created a new function called createNewHash that calls on createHash, update, and digest with variable update input. This is to reduce redundancy for lines 20 and 27 because those three dot functions were called more than once.

If condition on line 16 is reduced to a ternary operator because it would assign to candidate anyways and would be more space-efficient than if and else. - This wouldnt be appropriate for the if and else on line 18 because of the second conditional inside the if statement; you would have to concatonate  ternary operators and it wouldnt be as readable.

All if statements are now documented with comments for quick understanding without reading the code because we all know that it is harder reading code than implementing it.