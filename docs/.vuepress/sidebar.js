const CONST = require("./list");

module.exports = {
    "/": [
        {
            title: "HTML",
            children: CONST.HtmlList,
        },
        {
            title: "CSS",
            children: CONST.CssList,
        },
        {
            title: "JavaScript",
            children: CONST.JavaScriptList,
        },
        // {
        //     title: "GSAP",
        //     children: CONST.GsapList,
        // },
        {
            title: "React",
            children: CONST.ReactList,
        },
        {
            title: "Vue",
            children: [
                CONST.VueList,
                {
                    title: "Nuxt.js",
                }
            ]
        },
        // {
      //   title: "Flutter",
      //   collapsable: true,
      //   children: CONST.FlutterList,
      // },
    //   {
    //     title: "Laravel",
    //     collapsable: true,
    //     children: CONST.LaravelList,
    //   },
    //   {
    //     title: "IT Knowledge",
    //     collapsable: true,
    //     children: CONST.ITKnowledgeList,
    //   },
      // {
      //   title: "예상면접질문",
      //   collapsable: true,
      //   children: CONST.InterviewList,
      // },
      // {
      //   title: "BaekJoon",
      //   collapsable: true,
      //   children: CONST.BaekJoonList,
      // },
      // {
      //   title: "Programmers",
      //   collapsable: true,
      //   children: CONST.ProgrammersList,
      // },
    ],
}