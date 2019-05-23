---
title: Quick Start
subtitle: Create Test & Live
description: In part five of our Quick Start guide, learn how to create your Test and Live environments.
quickstart: true
anchorid: create-test-live
generator: pagination
layout: guide
type: guide
pagination:
  provider: data.quickstartpages
use:
  - quickstartpages
permalink: docs/guides/quickstart/create-test-live/
nexturl: guides/quickstart/clone-live-to-dev/
nextpage: Clone Live to Dev
previousurl: guides/quickstart/site-dashboard/
previouspage: Site Dashboard
editpath: quickstart/05-create-test-live.md
image: launchGuide-twitterLarge
---

In this lesson, we’re going to to create our Test site and our Live site, which we just learned about in the previous lesson.

**Watch the video:**

<div class="panel panel-drop panel-guide">
  <script src="//fast.wistia.com/embed/medias/hzbsff4k6c.jsonp" async />
  <script src="//fast.wistia.com/assets/external/E-v1.js" async />
  <div
    class="wistia_responsive_padding"
    style="padding:56.25% 0 0 0;position:relative;"
  >
    <div
      class="wistia_responsive_wrapper"
      style="height:100%;left:0;position:absolute;top:0;width:100%;"
    >
      <div
        class="wistia_embed wistia_async_hzbsff4k6c videoFoam=true"
        style="height:100%;width:100%"
      >
        &nbsp;
      </div>
    </div>
  </div>
</div>

**Try it yourself:**

<Alert title={"Warning"} type={"danger"}>
  If you haven’t completed the installation of your Dev site, return to [Create
  New Site](/docs/guides/quickstart/create-new-site), and do this now, before
  proceeding.
</Alert>

1. Navigate to your Site Dashboard and click the <Icon icon={"equalizer"} text={"Test"}/> tab. Here you’ll have access to your Test environment, but it hasn’t been created yet. Do this now by clicking **Create Test Environment**.

   This takes a few moments.

2. Now click <Icon icon={"new-window-alt"} text={"Visit Test Site"}/>. This will open your Test site in a new browser tab with the URL `test-YOURSITE.pantheonsite.io`.

3. Navigate back to your Site Dashboard, and click the <Icon icon={"cardio"} text={"Live"}/> tab. Here again you need to create the environment. Do this now by clicking **Create Live Environment**.

4. This time, while we wait, let’s click on **Workflows** <Icon icon={"chevron-down"} /> In the dropdown you’ll find your active workflow as well as those workflows we’ve completed to this point.

Congratulations! You now have three copies of your site running in three separate environments: Dev, Test, and Live.
