# React 컴포넌트 생명주기

정의를 따라 DOM트리나 페이지위에 올라갈 때를 **mount**, DOM트리에서 삭제되거나 웹 페이지에서 없어질 때를 **unmount** 라고 정의했을 때, mount 와 unmount 사이에는 수많은 함수들이 존재한다.



## mount

컴포넌트가 처음 실행될 때를 말함. 컴포넌트가 시작되면 우선 context, defaultProps, state 저장함. 그 다음 **componentWillMount**(호출 중 props, state 변경불가)메소드 호출 후 render 로 컴포넌트를 DOM 에 넣은 후 **componentDidMount**(state변경 불가, setState 로만 변경) 메소드를 호출한다. 

