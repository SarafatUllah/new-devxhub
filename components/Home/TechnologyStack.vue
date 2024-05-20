<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import BaseIconHtml from "~/components/base/icon/Html.vue";
import BaseIconCss3 from "~/components/base/icon/Css3.vue";
import BaseIconTailwind from "~/components/base/icon/Tailwind.vue";
import BaseIconBootstrap from "~/components/base/icon/Bootstrap.vue";
import BaseIconJavascript from "~/components/base/icon/JS.vue";
import BaseIconTypescript from "~/components/base/icon/Typescript.vue";
import BaseIconReactJs from "~/components/base/icon/ReactJs.vue";
import BaseIconVueJs from "~/components/base/icon/VueJs.vue";
import BaseIconAngularJs from "~/components/base/icon/AngularJs.vue";
import BaseIconEmberJs from "~/components/base/icon/EmberJs.vue";
import BaseIconSvelte from "~/components/base/icon/Svelte.vue";
import BaseIconPhp from "~/components/base/icon/Php.vue";
import BaseIconPython from "~/components/base/icon/Python.vue";
import BaseIconNodeJs from "~/components/base/icon/NodeJs.vue";
import BaseIconLaravel from "~/components/base/icon/Laravel.vue";
import BaseIcondJango from "~/components/base/icon/Django.vue";
import BaseIconFlask from "~/components/base/icon/Flask.vue";
import BaseIconLumen from "~/components/base/icon/Lumen.vue";
import BaseIconAspNet from "~/components/base/icon/AspNet.vue";
import BaseIconSpring from "~/components/base/icon/Spring.vue";
import BaseIconSql from "~/components/base/icon/Sql.vue";
import BaseIconMySql from "~/components/base/icon/MySql.vue";
import BaseIconSqlite from "~/components/base/icon/Sqlite.vue";
import BaseIconPostgreSql from "~/components/base/icon/PostgreSql.vue";
import BaseIconMariaDb from "~/components/base/icon/MariaDb.vue";
import BaseIconMongoDb from "~/components/base/icon/MongoDb.vue";
import BaseIconRedis from "~/components/base/icon/Redis.vue";
import BaseIconAmazonAurora from "~/components/base/icon/AmazonAurora.vue";
import BaseIconMiscrosoftSql from "~/components/base/icon/MiscrosoftSql.vue";
import BaseIconAmazonDynamoDb from "~/components/base/icon/AmazonDynamoDb.vue";
import BaseIconAws from "~/components/base/icon/Aws.vue";
import BaseIconAmazonDigitalOcean from "~/components/base/icon/DigitalOcean.vue";
import BaseIconGoogleCloud from "~/components/base/icon/GoogleCloud.vue";
import BaseIconHeroku from "~/components/base/icon/Heroku.vue";
import BaseIconNetlify from "~/components/base/icon/Netlify.vue";
import BaseIconLinux from "~/components/base/icon/Linux.vue";
import BaseIconShared from "~/components/base/icon/Shared.vue";
import BaseIconDedicated from "~/components/base/icon/Dedicated.vue";
import BaseIconVps from "~/components/base/icon/Vps.vue";
import BaseIconDocker from "~/components/base/icon/Docker.vue";
import BaseIconJenkins from "~/components/base/icon/Jenkins.vue";
import BaseIconAnsible from "~/components/base/icon/Ansible.vue";
import BaseIconKubernates from "~/components/base/icon/Kubernates.vue";
import BaseIconGit from "~/components/base/icon/Git.vue";
import BaseIconGitHub from "~/components/base/icon/GitHub.vue";
import BaseIconGitLab from "~/components/base/icon/GitLab.vue";
import BaseIconBitbucket from "~/components/base/icon/Bitbucket.vue";
import BaseIconSlack from "~/components/base/icon/Slack.vue";
import BaseIconMicrosoftTeam from "~/components/base/icon/MicrosoftTeam.vue";
import BaseIconYouTrack from "~/components/base/icon/YouTrack.vue";
import BaseIconTrello from "~/components/base/icon/Trello.vue";
import BaseIconJira from "~/components/base/icon/Jira.vue";
import BaseIconAsana from "~/components/base/icon/Asana.vue";
import BaseIconApi from "~/components/base/icon/Api.vue";
import BaseIconGraphQlApi from "~/components/base/icon/GraphQlApi.vue";
import BaseIconFlutter from "~/components/base/icon/Flutter.vue";
import BaseIconDart from "~/components/base/icon/Dart.vue";
import BaseIconKotlin from "~/components/base/icon/Kotlin.vue";
import BaseIconReactNative from "~/components/base/icon/ReactNative.vue";
import BaseIconSwift from "~/components/base/icon/Swift.vue";
import BaseIconObjectiveC from "~/components/base/icon/ObjectiveC.vue";
// import { TechnologyStack, Technologies } from "~/types/post";
// const { data: TechnologyStacks } = useFetch<TechnologyStack[]>(
//   "/api/posts/technologyStack"
// );
// const { data: Technologies } = useFetch<Technologies[]>(
//   "/api/posts/technologies"
// );

// breakpoints
const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakpoints.greaterOrEqual("lg");
// const techStack = TechnologyStacks.value;
// const techCard = Technologies.value;
const techStack = ref([
  {
    id: 1,
    name: "Full Stack Development",
    stack: "FullStack",
  },
  {
    id: 2,
    name: "Frontend Development",
    stack: "Frontend",
  },
  {
    id: 3,
    name: "Backend Development",
    stack: "Backend",
  },
  {
    id: 4,
    name: "Mobile Applications Development",
    stack: "Mobile Applications",
  },
  {
    id: 5,
    name: "Database",
    stack: "Database",
  },
  {
    id: 6,
    name: "DevOps",
    stack: "DevOps",
  },
  {
    id: 7,
    name: "Project Managemenet",
    stack: "Project Managemenet",
  },
  {
    id: 8,
    name: "Others",
    stack: "Others",
  },
]);
const techCard = ref([
  {
    name: `<p>DEVxHUB do Full Stack <b class="yellowBlackHighLight">Web & Mobile Application [ IOS & Android ]</b> Development which refers to the holistic creation of software applications, encompassing both <b class="yellowBlackHighLight">front-end (client-side), back-end & server side</b> development. Full Stack Development is proficient in all layers of a software stack <b class="yellowBlackHighLight">including databases, servers, systems engineering, and clients.</b></p>

    <p class="pt-4"><b class="technologyStackHighLight">Front-end</b> technologies involve <b class="technologyStackHighLight">HTML, CSS and JavaScript</b> alongside libraries/frameworks like <b class="technologyStackHighLight">React, Angular and Vue.js</b> etc, which are responsible for user interactions and visual aspects of a web application. <b class="technologyStackHighLight">Back-end</b> technologies manage the server and database interactions. Common languages include <b class="technologyStackHighLight">Python, Java, Ruby, .NET and Node.js</b> often with frameworks like <b class="technologyStackHighLight">Django, Express.js and Ruby on Rails.</b> <b class="technologyStackHighLight">Databases like MySQL, PostgreSQL and MongoDB</b> store and manage data.</p>

    <p class="pt-4"><b class="lightBlueWhiteHighLight">DevOps</b> and <b class="lightBlueWhiteHighLight">cloud</b> services <b class="lightBlueWhiteHighLight">(AWS, Azure, Google Cloud, Digital Ocean)</b> are crucial, as are version control systems like <b class="lightBlueWhiteHighLight">Git.</b> In a nutshell, <b class="lightBlueWhiteHighLight">Full Stack Development</b> demands a blend of <b class="lightBlueWhiteHighLight">software engineering knowledge,</b> <b class="lightBlueWhiteHighLight">creativity</b> and an understanding of user experience principles. </p>`,
    image: "",
    stack: "FullStack",
  },
  {
    name: "HTML",
    image: BaseIconHtml,
    stack: "Frontend",
  },
  {
    name: "CSS3",
    image: BaseIconCss3,
    stack: "Frontend",
  },
  {
    name: "Tailwind",
    image: BaseIconTailwind,
    stack: "Frontend",
  },
  {
    name: "Bootstrap",
    image: BaseIconBootstrap,
    stack: "Frontend",
  },
  {
    name: "JavaScript",
    image: BaseIconJavascript,
    stack: "Frontend",
  },
  {
    name: "Typescript",
    image: BaseIconTypescript,
    stack: "Frontend",
  },
  {
    name: "ReactJS",
    image: BaseIconReactJs,
    stack: "Frontend",
  },
  {
    name: "VueJS",
    image: BaseIconVueJs,
    stack: "Frontend",
  },
  {
    name: "AngularJS",
    image: BaseIconAngularJs,
    stack: "Frontend",
  },
  {
    name: "EmberJS",
    image: BaseIconEmberJs,
    stack: "Frontend",
  },
  {
    name: "Svelte",
    image: BaseIconSvelte,
    stack: "Frontend",
  },
  {
    name: "PHP",
    image: BaseIconPhp,
    stack: "Backend",
  },
  {
    name: "Python",
    image: BaseIconPython,
    stack: "Backend",
  },
  {
    name: "NodeJS",
    image: BaseIconNodeJs,
    stack: "Backend",
  },
  {
    name: "Laravel",
    image: BaseIconLaravel,
    stack: "Backend",
  },
  {
    name: "dJango",
    image: BaseIcondJango,
    stack: "Backend",
  },
  {
    name: "Flask",
    image: BaseIconFlask,
    stack: "Backend",
  },
  {
    name: "Lumen",
    image: BaseIconLumen,
    stack: "Backend",
  },
  {
    name: "C# [ASP.NET]",
    image: BaseIconAspNet,
    stack: "Backend",
  },
  {
    name: "Java [Spring Boot]",
    image: BaseIconSpring,
    stack: "Backend",
  },
  {
    name: "Flutter",
    image: BaseIconFlutter,
    stack: "Mobile Applications",
  },
  {
    name: "Dart",
    image: BaseIconDart,
    stack: "Mobile Applications",
  },
  {
    name: "Kotlin",
    image: BaseIconKotlin,
    stack: "Mobile Applications",
  },
  {
    name: "React Native",
    image: BaseIconReactNative,
    stack: "Mobile Applications",
  },
  {
    name: "Swift",
    image: BaseIconSwift,
    stack: "Mobile Applications",
  },
  {
    name: "Objective-C",
    image: BaseIconObjectiveC,
    stack: "Mobile Applications",
  },
  {
    name: "SQL",
    image: BaseIconSql,
    stack: "Database",
  },
  {
    name: "MySQL",
    image: BaseIconMySql,
    stack: "Database",
  },
  {
    name: "SQLite",
    image: BaseIconSqlite,
    stack: "Database",
  },
  {
    name: "PostgreSQL",
    image: BaseIconPostgreSql,
    stack: "Database",
  },
  {
    name: "MariaDB",
    image: BaseIconMariaDb,
    stack: "Database",
  },
  {
    name: "MongoDb",
    image: BaseIconMongoDb,
    stack: "Database",
  },
  {
    name: "Redis",
    image: BaseIconRedis,
    stack: "Database",
  },
  {
    name: "Amazon Aurora",
    image: BaseIconAmazonAurora,
    stack: "Database",
  },
  {
    name: "Miscrosoft SQL Server",
    image: BaseIconMiscrosoftSql,
    stack: "Database",
  },
  {
    name: "Amazon DynamoDB",
    image: BaseIconAmazonDynamoDb,
    stack: "Database",
  },
  {
    name: "AWS",
    image: BaseIconAws,
    stack: "DevOps",
  },
  {
    name: "Digital Ocean",
    image: BaseIconAmazonDigitalOcean,
    stack: "DevOps",
  },
  {
    name: "Google Cloud",
    image: BaseIconGoogleCloud,
    stack: "DevOps",
  },
  {
    name: "Heroku",
    image: BaseIconHeroku,
    stack: "DevOps",
  },
  {
    name: "Netlify",
    image: BaseIconNetlify,
    stack: "DevOps",
  },
  {
    name: "Linux",
    image: BaseIconLinux,
    stack: "DevOps",
  },
  {
    name: "Shared",
    image: BaseIconShared,
    stack: "DevOps",
  },
  {
    name: "Dedicated",
    image: BaseIconDedicated,
    stack: "DevOps",
  },
  {
    name: "VPS Server and hosting",
    image: BaseIconVps,
    stack: "DevOps",
  },
  {
    name: "Docker",
    image: BaseIconDocker,
    stack: "DevOps",
  },
  {
    name: "Jenkins",
    image: BaseIconJenkins,
    stack: "DevOps",
  },
  {
    name: "Ansible",
    image: BaseIconAnsible,
    stack: "DevOps",
  },
  {
    name: "Kubernates",
    image: BaseIconKubernates,
    stack: "DevOps",
  },
  {
    name: "Git",
    image: BaseIconGit,
    stack: "DevOps",
  },
  {
    name: "GitHub",
    image: BaseIconGitHub,
    stack: "DevOps",
  },
  {
    name: "GitLab",
    image: BaseIconGitLab,
    stack: "DevOps",
  },
  {
    name: "Bitbucket",
    image: BaseIconBitbucket,
    stack: "DevOps",
  },
  {
    name: "Slack",
    image: BaseIconSlack,
    stack: "Project Managemenet",
  },
  {
    name: "Microsoft Team",
    image: BaseIconMicrosoftTeam,
    stack: "Project Managemenet",
  },
  {
    name: "YouTrack",
    image: BaseIconYouTrack,
    stack: "Project Managemenet",
  },
  {
    name: "Trello",
    image: BaseIconTrello,
    stack: "Project Managemenet",
  },
  {
    name: "Jira",
    image: BaseIconJira,
    stack: "Project Managemenet",
  },
  {
    name: "Asana",
    image: BaseIconAsana,
    stack: "Project Managemenet",
  },
  {
    name: "API [Rest API, or Restful API]",
    image: BaseIconApi,
    stack: "Others",
  },
  {
    name: "GraphQL API",
    image: BaseIconGraphQlApi,
    stack: "Others",
  },
]);

const expertiseArea = ref([
  {
    image: "/industryExperties/expertiseArea/fullstack.svg",
    text: "Full Stack Development",
    backgroundColor: "#000000",
    margin: 1.8,
  },
  {
    image: "/industryExperties/expertiseArea/frontend.svg",
    text: "Frontend Development",
    backgroundColor: "#662D90",
    margin: 1.8,
  },
  {
    image: "/industryExperties/expertiseArea/backend.svg",
    text: "Backend Development",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/expertiseArea/mobileApplication.svg",
    text: "Mobile Applications Development",
    backgroundColor: "#079CC0",
    margin: 1.8,
  },
  {
    image: "/industryExperties/expertiseArea/databaseDesign.svg",
    text: "Database Design & Development",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/expertiseArea/devops.svg",
    text: "DevOps",
    backgroundColor: "#079CC0",
    margin: 1.8,
  },
  {
    image: "/industryExperties/expertiseArea/digitalMarketing.svg",
    text: "Digital Marketing ",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/expertiseArea/projectManagement.svg",
    text: "Project Managemenet",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/expertiseArea/sqaTesting.svg",
    text: "SQA Testing & Automation ",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/expertiseArea/itConsultancy.svg",
    text: "IT Consultancy",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
]);

const activeStack = ref("FullStack");
const activeStackDemo = ref("FullStack");
const stackClickCount = ref(0);
const activeTrue = ref(false);
const handleActiveStack = (selectedStack: string) => {
  stackClickCount.value++;
  setTimeout(() => {
    stackClickCount.value = 0;
  }, 300);

  if (window.innerWidth < 1024 && activeStackDemo.value === selectedStack) {
    if (
      view.value &&
      activeStack.value === selectedStack &&
      stackClickCount.value === 2 &&
      !activeTrue.value
    ) {
      view.value = false;
      start.value = 0;
      end.value = 6;
      activeStack.value = "";
      setTimeout(() => {
        activeStackDemo.value = "";
      }, 480);
    } else if (!view.value) {
      activeTrue.value = true;
      setTimeout(() => {
        activeTrue.value = false;
      }, 500);

      view.value = true;
      start.value = 0;
      end.value = 6;
      activeStack.value = selectedStack;
      setTimeout(() => {
        activeStackDemo.value = selectedStack;
      }, 480);
    }
  } else if (activeStackDemo.value !== selectedStack) {
    view.value = false;
    setTimeout(() => {
      view.value = true;
    }, 450);
    start.value = 0;
    end.value = 6;
    activeStack.value = selectedStack;
    setTimeout(() => {
      activeStackDemo.value = selectedStack;
    }, 480);
  } else if (
    window.innerWidth >= 1024 &&
    activeStackDemo.value === selectedStack
  ) {
    view.value = false;
    setTimeout(() => {
      view.value = true;
    }, 450);
    start.value = 0;
    end.value = 6;
    activeStack.value = selectedStack;
    setTimeout(() => {
      activeStackDemo.value = selectedStack;
    }, 480);
  }
};
// data
const totalCardLength = ref(0);
const finalTeckCard = computed(() => {
  const tempArray = techCard.value.filter((item) => {
    if (item.stack === activeStack.value) {
      return item;
    }
    // else if (item.stack === activeStack.value === "FullStack") {
    //   return item;
    // }
  });

  totalCardLength.value = tempArray.length;
  return tempArray.slice(start.value, end.value);
});
const start = ref(0);
const end = ref(6);
const view = ref(true);
const seeMoreStack = () => {
  view.value = false;
  setTimeout(() => {
    view.value = true;
  }, 450);
  start.value = end.value;
  end.value = end.value + start.value;
};
</script>

<template>
  <div id="technology-stacks" class="">
    <div class="px-0 md:px-4 lg:px-0">
      <h2 class="text-center text-[#FDB21D] md:text-5xl text-3xl font-semibold">
        Expertise Area
      </h2>
      <p
        class="text-[#F0F0F0] md:text-lg text-base text-center pt-5 max-w-[625px] mx-auto"
      >
        We help small businesses around the world with amazing products that
        solve their business and web problems. DEVxHUB is special because
      </p>

      <div
        class="flex flex-wrap items-center justify-center w-full mt-12 2dx:mt-17"
      >
        <div
          v-for="(expertise, index) in expertiseArea"
          :key="index"
          :class="`p-4 md:p-8 lg:p-6 xl:p-8 pb-8 md:pb-4 2dx:w-1/4 md:w-auto w-[48%] 2dx:flex 2dx:justify-center`"
        >
          <div
            class="w-[140px] md:w-[200px] lg:w-[244px] 2dx:w-[320px] md:h-auto h-[150px] rounded-lg px-4 xl:px-8 flex flex-col items-center justify-center space-y-3"
          >
            <img
              class="h-[54px] w-[54px]"
              :src="expertise.image"
              :alt="expertise.text"
            />
            <div
              class="text-white text-center text-lg xl:text-xl 2xl:text-[22px] font-bold h-[60px]"
            >
              {{ expertise.text }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="technologyStackDiv flex flex-col lg:flex-row lg:items-start items-center w-full md:mt-14 lgx:mt-16 mt-8 hidden"
        :class="
          activeStackDemo !== 'FullStack'
            ? 'lg:space-x-6 lgx:space-x-20 xl:space-x-36'
            : 'space-x-4'
        "
      >
        <div class="flex flex-col space-y-8 font-bold lg:w-auto w-full mt-4">
          <ClientOnly>
            <template v-for="(tech, index) in techStack" :key="index">
              <div
                class="p-5 rounded-lg min-w-[260px] cursor-pointer md:text-left text-center whitespace-nowrap"
                :class="
                  tech.stack === activeStack
                    ? 'bg-primary text-black'
                    : 'bg-[#2A1E56] text-white'
                "
                @click="handleActiveStack(tech.stack)"
              >
                {{ tech.name }}
              </div>
              <Transition name="page">
                <div
                  v-if="
                    !isDesktop &&
                    activeStack === tech.stack &&
                    finalTeckCard.length > 0 &&
                    view
                  "
                  class="flex-grow self-center"
                >
                  <div class="flex flex-wrap justify-center lgx:justify-normal">
                    <TransitionGroup name="inout">
                      <template v-for="(techSingle, index) in finalTeckCard">
                        <div
                          v-if="view"
                          :key="index"
                          class="techCard flex flex-col space-y-8 justify-center xl:p-8 p-4 md:mx-4 mx-2 mb-4"
                          :class="
                            techSingle.stack === 'FullStack'
                              ? 'w-full h-full'
                              : 'xl:h-[254px] xl:w-[188px] md:w-[168px] md:h-[234px] w-[150px] h-[226px]'
                          "
                        >
                          <div
                            v-if="techSingle.image"
                            class="cardInnerIconBg flex justify-center items-center"
                          >
                            <div>
                              <!-- <img
                                :src="techSingle.image"
                                alt=""
                                srcset=""
                                class="max-h-[90px]"
                              /> -->
                              <component :is="techSingle.image"></component>
                            </div>
                          </div>
                          <div
                            v-if="techSingle.stack !== 'FullStack'"
                            class="text-center font-semibold text-[#FDB21D] text-xl"
                          >
                            {{ techSingle.name }}
                          </div>
                          <div
                            v-else
                            class="text-left text-white font-normal text-lg leading-8"
                            v-html="techSingle.name"
                          ></div>
                        </div>
                      </template>
                    </TransitionGroup>
                  </div>

                  <div
                    v-if="
                      view && totalCardLength > 6 && finalTeckCard.length === 6
                    "
                    class="w-full h-[40px] flex justify-center mt-3"
                  >
                    <Transition name="page">
                      <BaseButton
                        class="w-[140px] h-[40px] px-4 text-[#FDB21D] border-2 border-solid border-[#FDB21D] font-bold outline-none text-base"
                        :text="'See More'"
                        @click="seeMoreStack"
                      />
                    </Transition>
                  </div>
                </div>
              </Transition>
            </template>
          </ClientOnly>
        </div>
        <ClientOnly>
          <div v-if="isDesktop" class="flex-grow">
            <div
              class="flex flex-wrap justify-center lgx:justify-normal space-y-4 md:space-y-2 lg:space-y-0"
            >
              <TransitionGroup name="inout">
                <template v-for="(techSingle, index) in finalTeckCard">
                  <div
                    v-if="view"
                    :key="index"
                    class="techCard flex flex-col space-y-8 justify-center xl:p-8 p-4 mx-4 lg:!my-2 lgx:!my-4"
                    :class="
                      techSingle.stack === 'FullStack'
                        ? 'w-full h-full'
                        : 'xl:h-[254px] xl:w-[188px] w-[168px] h-[234px]'
                    "
                  >
                    <div
                      v-if="techSingle.image"
                      class="cardInnerIconBg flex justify-center items-center"
                    >
                      <div>
                        <!-- <img
                          :src="techSingle.image"
                          alt=""
                          srcset=""
                          class="max-h-[90px]"
                        /> -->
                        <component :is="techSingle.image"></component>
                      </div>
                    </div>
                    <div
                      v-if="techSingle.stack !== 'FullStack'"
                      class="text-center font-semibold text-[#FDB21D] text-xl"
                    >
                      {{ techSingle.name }}
                    </div>
                    <div
                      v-else
                      class="text-left text-white font-normal text-xl px-4 leading-10"
                      v-html="techSingle.name"
                    ></div>
                  </div>
                </template>
              </TransitionGroup>
            </div>

            <div class="w-full h-12 flex justify-end">
              <Transition name="page">
                <BaseButton
                  v-if="
                    view && totalCardLength > 6 && finalTeckCard.length === 6
                  "
                  class="w-[150px] h-12 px-4 mt-6 text-[#FDB21D] border-2 border-solid border-[#FDB21D] font-bold outline-none text-base"
                  :text="'See More'"
                  @click="seeMoreStack"
                />
              </Transition>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inout-enter-active,
.inout-leave-active {
  transition: all 0.5s ease-in-out;
}
.inout-enter-from,
.inout-leave-to {
  opacity: 0;
  scale: 0.5;
}
// .inout-enter-active {
//   transition-delay: 0.5s;
// }
.techCard {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  border: 0.5px solid #fdb21d;
  box-shadow: 0px 16px 42px rgba(0, 30, 108, 0.3);
  border-radius: 20px;
}
.cardInnerIconBg {
  @apply xl:w-[120px] xl:h-[120px] w-[110px] h-[110px] rounded-full mx-auto bg-transparent;
  // background: linear-gradient(
  //   180deg,
  //   rgba(255, 255, 255, 0.6) 0%,
  //   #8cd5b7 100%
  // );
}
.takeCareSingleCard {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  border: 0.5px solid #fdb21d;
  box-shadow: 0px 16px 42px rgba(0, 30, 108, 0.3);
  border-radius: 30px;
}
</style>
