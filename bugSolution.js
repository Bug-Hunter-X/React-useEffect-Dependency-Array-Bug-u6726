```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct conditional rendering logic
    if (count >= 0) { // accounts for initial render
      console.log('Count is greater than or equal to 0');
    } else {
      console.log('Count is negative');
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```