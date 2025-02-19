# React useEffect Dependency Array Bug

This repository demonstrates a common bug related to the dependency array in React's `useEffect` hook. The bug causes unexpected behavior due to an incomplete understanding of how the dependency array controls the execution of the effect. 

## Bug Description

The `MyComponent` component uses `useEffect` to log a message based on the value of the `count` state variable. However, the conditional logic inside `useEffect` is incorrect and does not correctly handle the initial render where `count` is 0.  This results in the log message only appearing after the counter has been incremented at least once.

## Bug Solution

The solution corrects the conditional logic to accurately reflect the intended behavior for all states of the count. The initial render where count is 0 will now also be reflected in the console log. 