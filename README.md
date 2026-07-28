# Ocean Capital Meeting Rooms Quick Start - Jekyll LibDoc version

This package refactors the static Teams Rooms quick start page into a GitHub Pages-compatible Jekyll LibDoc setup.

## Files included

- `_config.yml` - Enables the LibDoc remote theme and Ocean Capital metadata/sidebar branding.
- `index.md` - The current site content converted into a LibDoc page while preserving the image paths and wording.
- `assets/css/osco-room-guide.css` - Scoped Ocean Capital styling for the quick start content.
- `assets/js/osco-room-guide.js` - Persistent floating Menu drawer behavior.

## Keep your existing images folder

This version expects the same image structure already in your repository:

```text
images/
  00-logo.png
  01-home-screen.png
  02-join-scheduled-meeting.png
  03-start-meeting.png
  05-share-content-hdmi.png
  06-join-with-id.png
  07-invite-room.png
  08-meeting-controls.png
  09-layout-audio.png
  10-join-personal-device.png
  11-zoom-webex.png
```

## Publish steps

1. Back up your current `index.html`.
2. Delete or rename `index.html` so GitHub Pages uses `index.md` through Jekyll.
3. Upload `_config.yml`, `index.md`, and the `assets` folder from this package.
4. Ensure `.nojekyll` is removed if it exists, because this version needs Jekyll processing.
5. In GitHub Pages settings, keep `Deploy from a branch`, `main`, `/root`.
6. Commit the changes and open the deployed site.
