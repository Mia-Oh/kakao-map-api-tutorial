# kakao-map-api-tutorial
카카오 지도 API를 리액트를 사용하여 불러올 때 참고용 Repository
<br />

### 🍀 info
	1. Map.jsx - 위도, 경도를 이용한 지도를 띄우는 코드 작성
	2. SearchMap.jsx - 지도 바로 가기 링크 예시 
	3. CategoryMap.jsx - 카테고리로 장소에 원하는 카테고리의 장소 띄우기
	4. KeywordMap.jsx - 원하는 장소 1곳만 마크해서 포인트로 나타내기
	5. KeywordUrl.jsx - 원하는 장소 링크
	6. KeywordMarkMap.jsx - 원하는 장소 1곳만 마크해서 클릭 시 장소명과 카카오 지도 링크 나타내기

### 🍀 dependencies
	1. dotenv

### 🍀 추가 설명
	4. KeywordMap.jsx
	- 따로 기술해 놓은 기능을 하는 라이브러리가 없고 키워드를 검색한 후 키워드에 관련된 여러 개의 결과를 보여주는 라이브러리가 있었음
	- 그래서 여러 개의 검색 결과 중 가장 처음으로 나온 장소 id를 얻어서 원하는 하나의 장소만 마크해서 포인트로 나타낼 수 있게 함
