const CONST = require("./list");

module.exports = {
  "/": [
    //   {
    //     title: "Computer Science",
    //     collapsable: true,
    //     children: CONST.ComputerScienceList,
    //   },
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
      title: "HTML/CSS",
      children: CONST.HtmlCssList,
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
      title: "Php/Laravel",
      children: CONST.PhpLaravelList,
    },
    {
      title: "React",
      children: CONST.ReactList,
    },
    {
      title: "Vue/Nuxt",
      children: CONST.VueNuxtList,
    },
  ],
};
