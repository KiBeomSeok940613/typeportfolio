
  export default function Layout(props:{children: React.ReactNode})
  {
    // 페이지는 레이아웃 안쪽에 있는 원리 route 안에 있는 레이아웃은 자식
    // app layout.tsx 이 부모 요소 

    return (
        <>
     
        {/* <p>페이지 레이아웃</p> */}
        {props.children} 
        {/* page.tsx 레이아웃을 만들게되면 자식요소 레이아웃으로 만들어진다.children 은 자식요소를 칭하는 말. */}
       
      </>
    )
  }
