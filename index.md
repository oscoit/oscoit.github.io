---
title: Meeting Room Quick Start
description: Quick start guide for Microsoft Teams Rooms.
layout: libdoc/page
category: Quick Start
order: 1
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ '/assets/css/osco-room-guide.css' | relative_url }}">

<div class="osco-room-guide">
  <a class="skip-link" href="#main">Skip to guide</a>
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-row"><img class="brand-logo" src="{{ '/images/00-logo.png' | relative_url }}" alt="Ocean Capital"></div>
      <div class="hero">
        <div class="hero-copy">
          <h1>Room controls, simplified.</h1>
          <p>Use this quick reference at the room console to join meetings, share HDMI or Teams content, manage participants, and adjust the room layout.</p>
          <div class="hero-actions"><a class="primary-action" href="#join-scheduled-meeting">Join a meeting</a><a class="secondary-action" href="#share-content">Share content</a></div>
        </div>
        <aside class="hero-panel" aria-label="Guide topics"><h2>What do you need to do?</h2><div class="topic-grid"><a class="topic-card" href="#home-screen">
  <span class="topic-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M9.5 20v-6h5v6"/></svg></span>
  <span>Use the home screen</span>
</a>
<a class="topic-card" href="#join-scheduled-meeting">
  <span class="topic-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 9h18"/><path d="M8 14h5M8 17h8"/></svg></span>
  <span>Join a scheduled meeting</span>
</a>
<a class="topic-card" href="#start-meeting">
  <span class="topic-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6.5h10a3 3 0 0 1 3 3v8H7a3 3 0 0 1-3-3v-8Z"/><path d="M17 10.5l4-2.5v8l-4-2.5"/><path d="M10.5 10v4M8.5 12h4"/></svg></span>
  <span>Start a new meeting</span>
</a>
<a class="topic-card" href="#share-content">
  <span class="topic-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M12 13V8M9.5 10.5 12 8l2.5 2.5"/></svg></span>
  <span>Share content or HDMI</span>
</a>
<a class="topic-card" href="#join-with-id">
  <span class="topic-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/></svg></span>
  <span>Join with a meeting ID</span>
</a>
<a class="topic-card" href="#invite-room">
  <span class="topic-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h10v10H4z"/><path d="M14 10h6v7h-6z"/><path d="M7 5v4M11 5v4M17 8v4"/></svg></span>
  <span>Invite the room</span>
</a>
<a class="topic-card" href="#meeting-controls">
  <span class="topic-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 12h10M12 8v8"/></svg></span>
  <span>Meeting controls</span>
</a>
<a class="topic-card" href="#layout-audio">
  <span class="topic-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="8" height="7" rx="1"/><rect x="13" y="4" width="8" height="7" rx="1"/><path d="M5 17h5l5 4V3l-5 4H5v10Z"/></svg></span>
  <span>Adjust layout and audio</span>
</a>
<a class="topic-card" href="#join-personal-device">
  <span class="topic-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="7" y="2.8" width="10" height="18.4" rx="2"/><path d="M10 18h4"/><path d="M4 8.5c1.1-1.2 2.2-1.8 3.4-2M20 8.5c-1.1-1.2-2.2-1.8-3.4-2"/></svg></span>
  <span>Join from your device</span>
</a>
<a class="topic-card" href="#external-meetings">
  <span class="topic-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8M8 13h5"/><path d="M15.5 15.5 19 19"/></svg></span>
  <span>Zoom and Webex invites</span>
</a></div></aside>
      </div>
    </div>
  </header>
  <button class="menu-button" type="button" aria-controls="menu-drawer" aria-expanded="false" aria-label="Open quick navigation menu"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>Menu</button>
  <div class="menu-overlay" tabindex="-1" aria-hidden="true"></div>
  <aside class="menu-drawer" id="menu-drawer" aria-hidden="true" aria-label="Quick navigation menu"><div class="drawer-header"><h2>Quick links</h2><button class="drawer-close" type="button" aria-label="Close quick navigation menu">×</button></div><div class="drawer-links"><a href="#home-screen" class="drawer-link">Use the home screen </a>
<a href="#join-scheduled-meeting" class="drawer-link">Join a scheduled meeting </a>
<a href="#start-meeting" class="drawer-link">Start a new meeting </a>
<a href="#share-content" class="drawer-link">Share content or HDMI </a>
<a href="#join-with-id" class="drawer-link">Join with a meeting ID </a>
<a href="#invite-room" class="drawer-link">Invite the room </a>
<a href="#meeting-controls" class="drawer-link">Meeting controls </a>
<a href="#layout-audio" class="drawer-link">Adjust layout and audio </a>
<a href="#join-personal-device" class="drawer-link">Join from your device </a>
<a href="#external-meetings" class="drawer-link">Zoom and Webex invites </a></div></aside>
  <main id="main">
    <section id="home-screen" class="guide-section">
      <figure class="section-visual">
        <div class="visual-shell">
          <img src="{{ '/images/01-home-screen.png' | relative_url }}" alt="Teams Rooms home screen showing room controls and scheduled meetings" loading="lazy" onerror="this.closest('.visual-shell').classList.add('missing-image'); this.remove();">
        </div>
      </figure>
      <div class="section-copy">
        <div class="section-kicker">Getting started</div>
        <h2>Use the home screen</h2>
        <p>The touch panel is the starting point for room controls. Scheduled meetings, Meet, Share, Join with ID, and More options are available from the room console.</p>
        <ol>
          <li>Check the room calendar on the home screen.</li>
          <li>Use the main action buttons for meeting and sharing tasks.</li>
          <li>If the room is already invited to a meeting, select Join from the meeting tile.</li>
        </ol>
      </div>
    </section>

    <section id="join-scheduled-meeting" class="guide-section">
      <div class="section-copy">
        <div class="section-kicker">Meetings</div>
        <h2>Join a scheduled meeting</h2>
        <p>Meetings scheduled for the room appear on the touch panel. This is the fastest way to join from the room system.</p>
        <ol>
          <li>Find the meeting on the room touch panel.</li>
          <li>Select Join.</li>
          <li>Join from a laptop or mobile device too, if meeting chat or personal content sharing is needed.</li>
        </ol>
      </div>
      <figure class="section-visual">
        <div class="visual-shell">
          <img src="{{ '/images/02-join-scheduled-meeting.png' | relative_url }}" alt="Join button on a scheduled Teams Rooms meeting tile" loading="lazy" onerror="this.closest('.visual-shell').classList.add('missing-image'); this.remove();">
        </div>
      </figure>
    </section>

    <section id="start-meeting" class="guide-section">
      <figure class="section-visual">
        <div class="visual-shell">
          <img src="{{ '/images/03-start-meeting.png' | relative_url }}" alt="Meet button on a Teams Rooms touch panel" loading="lazy" onerror="this.closest('.visual-shell').classList.add('missing-image'); this.remove();">
        </div>
      </figure>
      <div class="section-copy">
        <div class="section-kicker">Meetings</div>
        <h2>Start a new meeting</h2>
        <p>Use Meet when an unscheduled meeting needs to start directly from the room.</p>
        <ol>
          <li>Select Meet.</li>
          <li>Search for a person or number.</li>
          <li>Add the people needed for the meeting.</li>
        </ol>
      </div>
    </section>

    <section id="share-content" class="guide-section">
      <div class="section-copy">
        <div class="section-kicker">Presenting</div>
        <h2>Share content or HDMI</h2>
        <p>Share content to the room display, including HDMI content when the room table has an HDMI connection available.</p>
        <ol>
          <li>Connect the HDMI cable if using a wired room connection.</li>
          <li>Select Share or Present on the room console if the content does not appear automatically.</li>
          <li>Use Stop presenting when finished.</li>
        </ol>
      </div>
      <figure class="section-visual">
        <div class="visual-shell">
          <img src="{{ '/images/05-share-content-hdmi.png' | relative_url }}" alt="Teams Rooms share content or HDMI sharing view" loading="lazy" onerror="this.closest('.visual-shell').classList.add('missing-image'); this.remove();">
        </div>
      </figure>
    </section>

    <section id="join-with-id" class="guide-section">
      <figure class="section-visual">
        <div class="visual-shell">
          <img src="{{ '/images/06-join-with-id.png' | relative_url }}" alt="Teams Rooms join with meeting ID screen" loading="lazy" onerror="this.closest('.visual-shell').classList.add('missing-image'); this.remove();">
        </div>
      </figure>
      <div class="section-copy">
        <div class="section-kicker">Meetings</div>
        <h2>Join with a meeting ID</h2>
        <p>Use Join with an ID when the meeting is not listed on the room calendar but the Teams meeting ID and passcode are available.</p>
        <ol>
          <li>Select Join with an ID.</li>
          <li>Enter the meeting ID.</li>
          <li>Enter the passcode if prompted.</li>
        </ol>
      </div>
    </section>

    <section id="invite-room" class="guide-section">
      <div class="section-copy">
        <div class="section-kicker">Calendar</div>
        <h2>Invite the room</h2>
        <p>If a meeting exists on a laptop or mobile device but the room was not invited, add the room to the meeting so the room can join.</p>
        <ol>
          <li>Open the meeting invite from the device.</li>
          <li>Add the meeting room as a participant or location.</li>
          <li>Join from the room touch panel after the invite reaches the room.</li>
        </ol>
      </div>
      <figure class="section-visual">
        <div class="visual-shell">
          <img src="{{ '/images/07-invite-room.png' | relative_url }}" alt="Meeting invite showing a room added as a participant" loading="lazy" onerror="this.closest('.visual-shell').classList.add('missing-image'); this.remove();">
        </div>
      </figure>
    </section>

    <section id="meeting-controls" class="meeting-controls-section">
      <div class="controls-copy">
        <div class="section-kicker">Controls</div>
        <h2>Meeting Controls</h2>
        <p>Use this quick overview to identify the common controls available while you are in a meeting.</p>
      </div>
      <figure class="controls-visual">
        <img src="{{ '/images/08-meeting-controls.png' | relative_url }}" alt="Annotated Teams Rooms meeting controls overview" loading="lazy">
      </figure>
      <div class="controls-card-list" aria-label="Meeting control legend">
        <ol>
          <li><span>1</span>View options</li>
<li><span>2</span>Raise your hand</li>
<li><span>3</span>Reactions</li>
<li><span>4</span>Options</li>
<li><span>5</span>Volume control</li>
<li><span>6</span>Camera on/off</li>
<li><span>7</span>Mute on/off</li>
<li><span>8</span>Share content</li>
<li><span>9</span>End call</li>
<li><span>10</span>Change view</li>
<li><span>11</span>Invite someone</li>
<li><span>12</span>Participants</li>
<li><span>13</span>Manage participants</li>
        </ol>
      </div>
    </section>

    <section id="layout-audio" class="guide-section">
      <div class="section-copy">
        <div class="section-kicker">In a meeting</div>
        <h2>Adjust layout and audio</h2>
        <p>Room layout, volume, and microphone controls are available during the meeting from the room console.</p>
        <ol>
          <li>Select Layout or View to choose the room display layout.</li>
          <li>Use Volume controls to adjust speaker volume.</li>
          <li>Mute or unmute the room microphone from the touch panel.</li>
        </ol>
      </div>
      <figure class="section-visual">
        <div class="visual-shell">
          <img src="{{ '/images/09-layout-audio.png' | relative_url }}" alt="Teams Rooms layout and audio settings" loading="lazy" onerror="this.closest('.visual-shell').classList.add('missing-image'); this.remove();">
        </div>
      </figure>
    </section>

    <section id="join-personal-device" class="guide-section">
      <figure class="section-visual">
        <div class="visual-shell">
          <img src="{{ '/images/10-join-personal-device.png' | relative_url }}" alt="Laptop or phone joining a Teams meeting with room audio muted" loading="lazy" onerror="this.closest('.visual-shell').classList.add('missing-image'); this.remove();">
        </div>
      </figure>
      <div class="section-copy">
        <div class="section-kicker">Companion mode</div>
        <h2>Join from your device</h2>
        <p>Joining from a personal device is useful for meeting chat, personal file sharing, or participant views.</p>
        <ol>
          <li>Join the same Teams meeting from the personal device.</li>
          <li>Do not use personal device audio unless specifically needed.</li>
          <li>Keep the personal device muted to prevent audio feedback.</li>
        </ol>
      </div>
    </section>

    <section id="external-meetings" class="guide-section">
      <div class="section-copy">
        <div class="section-kicker">External meetings</div>
        <h2>Zoom and Webex invites</h2>
        <p>External meeting invites can be forwarded to the room when the meeting needs to be joined from the room system but should this not appear, you have the option to join with ID.</p>
        <ol>
          <li>Select &#x27;Join With an ID #&#x27;.</li>
          <li>Choose the meeting service provider, Zoom/WebEx.</li>
          <li>Enter the meeting ID &amp; passcode, then Join.</li>
        </ol>
      </div>
      <figure class="section-visual">
        <div class="visual-shell">
          <img src="{{ '/images/11-zoom-webex.png' | relative_url }}" alt="External meeting invite displayed on a Teams Rooms room calendar" loading="lazy" onerror="this.closest('.visual-shell').classList.add('missing-image'); this.remove();">
        </div>
      </figure>
    </section>
  </main>
</div>

<script src="{{ '/assets/js/osco-room-guide.js' | relative_url }}"></script>
