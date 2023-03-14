const HospitalLink = () => {

  const placeName = '한양여자대학교';

  return (
    <>
      <a href={`https://map.kakao.com/link/search/${placeName}`}>{placeName}</a>
    </>
  );
}

export default HospitalLink;