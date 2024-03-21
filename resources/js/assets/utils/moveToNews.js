const blogURL = [
  "https://blog.naver.com/startupkised/223140313674",
  "https://channelpnu.pusan.ac.kr/news/articleView.html?idxno=33092",
  "https://magazine.hankyung.com/job-joy/article/202201190750d",
  "https://www.newsprime.co.kr/news/article/?no=588275",
  "https://theviewers.co.kr/View.aspx?No=2142364",
  "https://www.enewstoday.co.kr/news/articleView.html?idxno=1492894",
];

export function useMoveToNews() {

  const moveToNews = (i) => {
    window.open(blogURL[i]);
  };

  return {
    moveToNews,
  };
}