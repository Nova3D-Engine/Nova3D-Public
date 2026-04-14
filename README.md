# Nova3D Public – Bug Reports & Issue Tracking

Welcome to the **Nova3D** public issue tracker! This repository is used to collect bug reports, crash logs, and feature requests from users of **Nova3D**, the 3D game engine available on [Steam](https://store.steampowered.com/).

---

## 📋 Table of Contents

1. [Before You Submit an Issue](#1-before-you-submit-an-issue)
2. [Creating a GitHub Account](#2-creating-a-github-account)
3. [How to Submit a Bug Report](#3-how-to-submit-a-bug-report)
4. [Writing a Good Bug Report](#4-writing-a-good-bug-report)
5. [Attaching Files & Screenshots](#5-attaching-files--screenshots)
6. [Following Up on Your Issue](#6-following-up-on-your-issue)
7. [Feature Requests](#7-feature-requests)
8. [Community & Support](#8-community--support)

---

## 1. Before You Submit an Issue

Please do the following **before** opening a new issue to help us keep the tracker organized:

- **Update Nova3D.** Make sure you are running the latest version via Steam (right-click the game → *Properties* → *Updates* → check for updates).
- **Search existing issues.** Use the [Issues search bar](../../issues) to check whether your bug has already been reported. If it has, you can **add a 👍 reaction** to the existing issue or **leave a comment** with additional details rather than opening a duplicate.
- **Check the closed issues** as well – your problem may already be fixed in an upcoming build. Use the *Closed* filter on the Issues page.

---

## 2. Creating a GitHub Account

Submitting an issue requires a free GitHub account.

1. Go to [https://github.com/join](https://github.com/join).
2. Enter a username, email address, and password, then click **Create account**.
3. Verify your email address when prompted.
4. You're ready to report issues!

> **Note:** Your GitHub username does not have to match your Steam display name.

---

## 3. How to Submit a Bug Report

1. Navigate to the [**Issues** tab](../../issues) at the top of this page.

   ![Issues tab location](https://docs.github.com/assets/cb-25896/mw-1440/images/help/issues/issues-tab.webp)

2. Click the green **New issue** button in the top-right corner.

3. Choose the appropriate issue template:
   | Template | When to use |
   |---|---|
   | 🐛 **Bug Report** | Something is broken or behaves unexpectedly |
   | 💥 **Crash Report** | Nova3D crashed or became unresponsive |
   | ✨ **Feature Request** | You would like a new feature or improvement |

4. Fill in the template form completely (see [Section 4](#4-writing-a-good-bug-report) for tips).

5. Click **Submit new issue** when finished.

---

## 4. Writing a Good Bug Report

A detailed report helps us reproduce and fix bugs faster. Please include:

### Title
Write a short, descriptive title that summarizes the problem in one sentence.

- ✅ `Terrain editor crashes when painting with a brush size above 512`
- ❌ `It doesn't work`

### Description

Fill in **every section** of the bug report template:

| Section | What to include |
|---|---|
| **Nova3D Version** | Shown on the Steam library page or in the engine's about/splash screen (e.g., `v1.4.2`) |
| **Operating System** | e.g., Windows 11 22H2, macOS 14.4, Ubuntu 22.04 |
| **GPU & Driver Version** | e.g., NVIDIA RTX 3080, driver 551.86 |
| **Steps to Reproduce** | Numbered list of exact steps that trigger the bug |
| **Expected Behavior** | What you expected to happen |
| **Actual Behavior** | What actually happened |
| **Frequency** | Does it happen every time, occasionally, or only once? |
| **Workaround** | If you found a way to avoid the bug, please share it |

### Example Bug Report

```
**Nova3D Version:** v1.4.2
**OS:** Windows 11 22H2
**GPU:** NVIDIA RTX 3080 (driver 551.86)

**Steps to reproduce:**
1. Open Nova3D and create a new empty project.
2. Add a Terrain node to the scene.
3. Open the Terrain Editor panel.
4. Set the brush size to 600 and attempt to paint.

**Expected behavior:** The terrain is painted normally.

**Actual behavior:** Nova3D freezes for ~5 seconds then crashes with an unhandled exception dialog.

**Frequency:** 100% reproducible.

**Workaround:** Keeping brush size at or below 512 avoids the crash.
```

---

## 5. Attaching Files & Screenshots

Visual evidence and log files make bugs much easier to diagnose.

### Screenshots & Videos
Drag-and-drop image or video files directly into the issue text area, or paste from the clipboard (`Ctrl+V` / `Cmd+V`). GitHub supports PNG, JPG, GIF, and MP4.

### Log Files
Nova3D writes log files to disk that can be invaluable for crash reports.

| Platform | Log file location |
|---|---|
| **Windows** | `%AppData%\Nova3D\logs\nova3d.log` |
| **macOS** | `~/Library/Application Support/Nova3D/logs/nova3d.log` |
| **Linux** | `~/.local/share/Nova3D/logs/nova3d.log` |

To attach a log file:
1. Locate the file using the path above.
2. Drag it into the GitHub issue text area, **or** copy its content and paste it inside a code block:

   ````
   ```
   [paste log contents here]
   ```
   ````

> ⚠️ **Privacy:** Log files may contain your system's username and hardware information. Review the file before uploading and remove any information you are not comfortable sharing.

### Project Files
If the bug is reproducible with a minimal project, you can zip the project folder and attach it to the issue. A minimal reproduction case greatly speeds up the fix.

---

## 6. Following Up on Your Issue

- **GitHub will email you** when a team member comments on or updates your issue. Make sure your GitHub notification email is not going to spam.
- You can **watch** the issue by clicking the *Subscribe* button on the right-hand sidebar.
- If you are asked for more information, please respond as soon as possible – issues that go without a response may be closed after 30 days.
- Once a fix ships, the issue will be closed and tagged with the release version it was fixed in.

---

## 7. Feature Requests

We welcome constructive suggestions! When submitting a feature request, please:

- Describe the **problem you are trying to solve**, not just the solution.
- Explain the **use case** – why would this benefit other users?
- Include any **mockups, diagrams, or examples** that help illustrate your idea.

Feature requests are evaluated alongside our development roadmap. A request being open does not guarantee it will be implemented, but popular requests (measured by 👍 reactions) do influence prioritization.

---

## 8. Community & Support

| Resource | Link |
|---|---|
| 🎮 Nova3D on Steam | [Search "Nova3D" on Steam](https://store.steampowered.com/search/?term=Nova3D) |
| 💬 Steam Community Hub | Available on the Nova3D Steam page |
| 📖 Official Documentation | See the in-engine Help menu |
| 🐛 Issue Tracker | [GitHub Issues](../../issues) |

---

> **Nova3D** is a commercial product. This repository is used exclusively for public issue tracking and does not contain engine source code.
>
> Thank you for taking the time to report issues – your feedback directly helps make Nova3D better for everyone! 🚀
