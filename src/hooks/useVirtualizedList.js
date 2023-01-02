import { useRef, useState, useEffect } from 'react';

export const useVirtualizedList = (items, itemHeight) => {
  const containerRef = useRef();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const { scrollTop, clientHeight } = container;
    const endIndex = Math.min(
      items.length,
      Math.ceil((scrollTop + clientHeight) / itemHeight)
    );
    setStartIndex(Math.max(0, Math.floor(scrollTop / itemHeight)));
    setVisibleItems(items.slice(startIndex, endIndex));
  }, [items, itemHeight]);

  return { containerRef, visibleItems };
}

// import { useVirtualizedList } from './useVirtualizedList';

// function MyList({ items, itemHeight }) {
//   const { containerRef, visibleItems } = useVirtualizedList(items, itemHeight);

//   return (
//     <div ref={containerRef} style={{ height: '200px', overflow: 'auto' }}>
//       {visibleItems.map((item, index) => (
//         <div key={item.id} style={{ height: itemHeight }}>
//           {item.name}
//         </div>
//       ))}
//     </div>
//   );
// }