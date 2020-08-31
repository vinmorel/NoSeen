# NoSeen
![](/assets/icon_140.png) 
\
\
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

_NoSeen is a Chromium extension that removes the client side message reception feature from Facebook and its affiliate sites._

### Features  :smiley:
- Works on facebook.com, messenger.com, m.facebook.com
- Toggle on/off from taskbar 
- Fast and lean implementation

## View
The below is the basic popup user interface

![](/assets/popup.png) 

## How it works
When a user is on a facebook page, a script launches and listens to mutations in the DOM. On every change, it scans and removes specific elements related to the message reception feature.   

## Installation

#### Clone
`git clone https://github.com/vinmorel/NoSeen.git`

#### Load unpacked
Go to Chrome Settings -> Extensions 
- Developper mode [enabled] 
- Load Unpacked -> repo directory  



