-- Q 3. Biggest Single Number
-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | num | int |
-- +-------------+------+
-- This table may contain duplicates (In other words, there is no
-- primary key for this table in SQL).
-- Each row of this table contains an integer.
-- A single number is a number that appears only once in the MyNumbers
-- table.
-- Find the largest single number. If there is no single number, report
-- null.
-- The result format is in the following example.
-- Example 1:
-- Input:
-- MyNumbers table:
-- +-----+
-- | num |
-- +-----+
-- | 8 |
-- | 8 |
-- | 3 |
-- | 3 |
-- | 1 |
-- | 4 |
-- | 5 |
-- | 6 |
-- +-----+
-- Output:
-- +-----+
-- | num |
-- +-----+
-- | 6 |
-- +-----+
-- Explanation: The single numbers are 1, 4, 5, and 6.

-- Since 6 is the largest single number, we return it.

-- Example 2:
-- Input:
-- MyNumbers table:
-- +-----+
-- | num |
-- +-----+
-- | 8 |
-- | 8 |
-- | 7 |
-- | 7 |
-- | 3 |
-- | 3 |
-- | 3 |
-- +-----+
-- Output:
-- +------+
-- | num |
-- +------+
-- | null |
-- +------+
-- Explanation: There are no single numbers in the input table so
-- we return null.

-- —------------------------------------------------------------------------------------

-- After completing the test, please follow these steps to submit your
-- code:
-- 1. Create a new Git repository (if you haven't already).
-- 2. Push the final version of your test code to this repository.
-- 3. Share the repository link with the examiner immediately after
-- the test.

-- Query to find the largest single number or return null if none exist
SELECT MAX(num) AS num
FROM (
    SELECT num
    FROM MyNumbers
    GROUP BY num
    HAVING COUNT(num) = 1
) AS SingleNumbers;