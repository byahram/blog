const CONST = require("./list");

module.exports = {
  "/": [
    //   {
    //     title: "Computer Science",
    //     collapsable: true,
    //     children: CONST.ITKnowledgeList,
    //   },
    {
      title: "CSS",
      children: CONST.CssList,
    },
    // {
    //   title: "Flutter",
    //   collapsable: true,
    //   children: CONST.FlutterList,
    // },
    {
        title: "GSAP",
        children: CONST.GsapList,
    },
    {
      title: "HTML",
      children: CONST.HtmlList,
    },
    // {
    //   title: "예상면접질문",
    //   collapsable: true,
    //   children: CONST.InterviewList,
    // },
    {
      title: "JavaScript",
      children: CONST.JavaScriptList,
    },
    {
      title: "Laravel",
      children: CONST.LaravelList,
    },
    {
      title: "React",
      children: CONST.ReactList,
    },
    {
      title: "Vue",
      children: CONST.VueList,
    },
  ],
};
