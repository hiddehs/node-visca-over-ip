"use strict";
/*
This file gives semantic names to all Visca constants
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var Constants = {
    COMMAND_TIMEOUT: 200,
    // == HEADER ==
    // masks for header components
    HEADERMASK_SOURCE: 112,
    HEADERMASK_RECIPIENT: 7,
    HEADERMASK_BROADCAST: 8,
    // == MESSAGE TYPE ==
    // controller message categories (QQ from the spec)
    MSGTYPE_COMMAND: 0x01,
    MSGTYPE_IF_CLEAR: 0x01,
    MSGTYPE_INQUIRY: 0x09,
    MSGTYPE_CANCEL: 0x20, // low nibble identifies the command buffer to cancel
    MSGTYPE_ADDRESS_SET: 0x30, // goes through all devices and then back to controller
    // camera message types (QQ from the spec)
    MSGTYPE_NETCHANGE: 0x38,
    MSGTYPE_ACK: 0x40, // low nibble identifies the command buffer holding command
    MSGTYPE_COMPLETE: 0x50, // low nibble identifies the command buffer that completed
    MSGTYPE_ERROR: 0x60, // low nibble identifies the command buffer for the error
    // == DATA TYPE ==
    // data types (RR from the spec)
    DATATYPE_INTERFACE: 0x00,
    DATATYPE_CAMERA: 0x04,
    DATATYPE_OPERATION: 0x06, // sometimes referred to as pan/tilt, but also does system
    // == COMMAND TYPE CONSTANTS ==
    // camera settings codes                // data (pqrs is in i2v format)
    CAM_POWER: 0x00, // (can inquire) ONVAL / OFFVAL
    CAM_SLEEP_TIME: 0x40, // (not in the sony manual) 0p 0q 0r 0s
    CAM_ICR: 0x01, // (can inquire) ONVAL / OFFVAL / infrared mode
    CAM_AUTO_ICR: 0x51, // (can inquire) ONVAL / OFFVAL / Auto dark-field mode
    CAM_AUTO_ICR_THRESHOLD: 0x21, // (can inquire) 00 00 0p 0q / threshold level
    CAM_GAIN: 0x0c, // (cmd only) 00, 02, 03 / reset, up, down // CMD_CAM_VAL_RESET, CMD_CAM_VAL_UP, CMD_CAM_VAL_DOWN
    CAM_GAIN_LIMIT: 0x2c, // (can inquire) 0p / range from 4-F
    CAM_GAIN_DIRECT: 0x4c, // (can inquire) 00 00 0p 0q / gain position
    CAM_RGAIN: 0x03, // (cmd only) same as gain command
    CAM_RGAIN_DIRECT: 0x43, // (can inquire) direct 00 00 0p 0q
    CAM_BGAIN: 0x04, // (cmd only) same as gain command
    CAM_BGAIN_DIRECT: 0x44, // (can inquire) direct 00 00 0p 0q
    CAM_ZOOM: 0x07, // (cmd only) 0x00 (stop), T/W 0x02, 0x03, 0x2p, 0x3p (variable)
    CAM_DZOOM: 0x06, // (can inquire) ONVAL / OFFVAL
    CAM_ZOOM_DIRECT: 0x47, // (can inquire) pqrs: zoom value, optional tuvw: focus value
    CAM_FOCUS: 0x08, // data settings just like zoom
    CAM_FOCUS_IR_CORRECTION: 0x11, // (can inquire) 0x00, 0x01 // basic boolean
    CAM_FOCUS_TRIGGER: 0x18, // when followed by CMD_CAM_FOCUS_TRIGGER_NOW
    CAM_FOCUS_INFINITY: 0x18, // when followed by CMD_CAM_FOCUS_TRIGGER_INF
    CAM_FOCUS_NEAR_LIMIT_POS: 0x28, // (can inquire) pqrs (i2v)
    CAM_FOCUS_AUTO: 0x38, // (can inquire) 0x02, 0x03, 0x10 | AUTO / MANUAL / AUTO+MANUAL (TOGGLE?)
    CAM_FOCUS_DIRECT: 0x48, // (can inquire) pqrs (i2v)
    CAM_FOCUS_AF_MODE: 0x57, // (can inquire) 0x00, 0x01, 0x02 (normal (on movement), interval, on zoom)
    CAM_FOCUS_AF_INTERVAL: 0x27, // (can inquire) pq: Movement time, rs: Interval time
    CAM_FOCUS_SENSE_HIGH: 0x58, // (can inquire) ONVAL / OFFVAL
    CAM_WB_MODE: 0x35, // (can inquire) 0-5 auto, indoor, outdoor, one-push, manual
    CAM_WB_TRIGGER: 0x10, // when followed by 0x05
    CAM_EXPOSURE_MODE: 0x39, // (can inquire) 00, 03, 0A, 0B, 0D / auto, manual, shutter, iris, bright
    CAM_SHUTTER_SLOW_AUTO: 0x5a, // (can inquire) ONVAL / OFFVAL / auto, manual
    CAM_SHUTTER: 0x0a, // 00, 02, 03 / same as gain
    CAM_SHUTTER_DIRECT: 0x4a, // (can inquire) 00 00 0p 0q
    CAM_IRIS: 0x0b, // CMD_CAM_VAL_RESET, CMD_CAM_VAL_UP, CMD_CAM_VAL_DOWN
    CAM_IRIS_DIRECT: 0x4b, // (can inquire) 00 00 0p 0q
    CAM_BRIGHT: 0x0d, // 00, 02, 03 / same as gain
    CAM_BRIGHT_DIRECT: 0x4d, // (can inquire) 00 00 0p 0q
    CAM_EXP_COMP: 0x0e, // 00, 02, 03 / same as gain
    CAM_EXP_COMP_ENABLE: 0x3e, // (can inquire) ON/OFF
    CAM_EXP_COMP_DIRECT: 0x4e, // (can inquire) 00 00 0p 0q
    CAM_BACKLIGHT: 0x33, // (can inquire) ON/OFF
    CAM_WIDE_D: 0x3d, // (can inquire) 0-4 / auto, on(ratio), on, off, on(hist)
    CAM_WIDE_D_REFRESH: 0x10, // when followed by 0x0D
    CAM_WIDE_D_SET: 0x2d, // (can inquire) 0p 0q 0r 0s 0t 0u 00 00
    // p: Screen display (0: Combined image, 2: Long-time, 3: Short-time)
    // q: Detection sensitivity (0: L 1: M 2: H)
    // r: Blocked-up shadow correction level (0: L 1: M 2: H 3: S)
    // s: Blown-out highlight correction level (0: L 1: M 2: H)
    // tu: Exposure ratio of short exposure (x1 to x64)
    CAM_APERTURE: 0x02, // 00, 02, 03 / like gain
    CAM_APERTURE_DIRECT: 0x42, // (can inquire) 00 00 0p 0q / aperture gain
    CAM_HIRES_ENABLE: 0x52, // (can inquire) ON/OFF
    CAM_NOISE_REDUCTION: 0x53, // (can inquire) 0p / 0-5
    CAM_GAMMA: 0x5b, // (can inquire) 0p / 0: standard, 1-4
    CAM_HIGH_SENSITIVITY: 0x5e, // (can inquire) ON/OFF
    CAM_FREEZE: 0x62, // (can inquire) see data constants
    CAM_EFFECT: 0x63, // (can inquire) see data constants
    CAM_EFFECT_DIGITAL: 0x64, // (can inquire) see data constants
    CAM_EFFECT_LEVEL: 0x65, // intensity of digital effect
    CAM_MEMORY: 0x3f, // 0a 0p / a: 0-reset, 1-set, 2-recall, p: memory bank 0-5
    CAM_ID_WRITE: 0x22, // (can inquire) pqrs: give the camera an id from 0000-FFFF
    CAM_CHROMA_SUPPRESS: 0x5f, // (can inquire) 0-3 / Chroma Suppression level off, 1, 2, 3
    CAM_COLOR_GAIN: 0x49, // (can inquire) 00 00 00 0p / 0-E
    CAM_COLOR_HUE: 0x4f, // (can inquire) 00 00 00 0p / 0-E
    // operational settings
    OP_MENU_SCREEN: 0x06, // ON/OFF
    OP_VIDEO_FORMAT: 0x35, // 00 0p
    OP_VIDEO_FORMAT_I_NOW: 0x23, // 0p / inquire only, returns current value
    OP_VIDEO_FORMAT_I_NEXT: 0x33, // 0p / inquire only, returns value for next power on
    // These codes are camera specific. Sony camera codes are as follows here
    // p:
    // 0 = 1080i59.94, 1 = 1080p29.97, 2 = 720p59.94, 3 = 720p29.97, 4 = NTSC (not all cameras)
    // 8 = 1080i50,    9 = 720p50,     A = 720p25,    B = 1080i50,   C = PAL (some cameras)
    // (I wonder if the manual intended to say B = 1080p50 ?)
    // video system changes require a power cycle
    OP_PAN_DRIVE: 0x01, // VV WW 0p 0q
    OP_PAN_ABSOLUTE: 0x02, // VV WW 0Y 0Y 0Y 0Y 0Z 0Z 0Z 0Z
    OP_PAN_RELATIVE: 0x03, // VV WW 0Y 0Y 0Y 0Y 0Z 0Z 0Z 0Z
    OP_PAN_MAX_SPEED: 0x11, // (inquire only) VV WW
    OP_PAN_POS: 0x12, // (inquire only) 0Y 0Y 0Y 0Y 0Z 0Z 0Z 0Z
    // VV: pan speed
    // WW: tilt speed
    // p: pan move 1-left, 2-right, 3-none
    // q: tilt move 1-up, 2-down, 3-none
    // YYYY: pan 4 bit signed value from E1E5 - 1E1B
    // ZZZZ: tilt 4 bit signed from FC75 to 0FF0 (flip off) or F010 to 038B (flip on)
    OP_PAN_HOME: 0x04, // no data
    OP_PAN_RESET: 0x05, // no data
    OP_PAN_LIMIT: 0x07,
    // W: 1 addresses the up-right limit, 0 addresses the down-left limit
    // to clear: 01 0W 07 0F 0F 0F 07 0F 0F 0F
    // to set:   00 0W 0Y 0Y 0Y 0Y 0Z 0Z 0Z 0Z
    OP_PAN_STATUS: 0x10, // (inquire only) pq rs, see below
    OP_IR_RECEIVE: 0x08, // (can inquire) ON/OFF/TOGGLE
    // special system commands (still need header and terminator)
    OP_IR_RETURN_ON: [
        0x01,
        0x7d,
        0x01,
        0x03,
        0x00,
        0x00
    ], // returns IR commands over VISCA?
    OP_IR_RETURN_OFF: [
        0x01,
        0x7d,
        0x01,
        0x13,
        0x00,
        0x00
    ],
    OP_INFO_DISPLAY_ON: [
        0x01,
        0x7e,
        0x01,
        0x18,
        0x02
    ],
    OP_INFO_DISPLAY_OFF: [
        0x01,
        0x7e,
        0x01,
        0x18,
        0x03
    ],
    // special inquiry commands
    OP_IR_CONDITION: [
        0x09,
        0x06,
        0x34
    ], // 0-stable, 1-unstable, 2-inactive
    OP_FAN_CONDITION: [
        0x09,
        0x7e,
        0x01,
        0x38
    ], // 0-on, 1-off
    OP_INFORMATION_DISPLAY_STATUS: [
        0x09,
        0x7e,
        0x01,
        0x18
    ], // ON/OFF
    OP_VERSION_INQUIRY: [
        0x09,
        0x00,
        0x02
    ], // returns 00 01 mn pq rs tu vw
    //mnq: model code
    //rstu: rom version
    //vw: socket number
    // block inquiries
    CAM_LENS_INQUIRY: [
        0x09,
        0x7e,
        0x7e,
        0x00
    ],
    // 0w 0w 0w 0w 0v 0v 0y 0y 0y 0y 00 WW VV
    // w: zoom position
    // v: focus near limit
    // y: focus position
    // WW:
    //     bit 0 indicates autofocus status,
    //     bit 1 indicates digital zoom status
    //     bit 2 indicates AF sensitivity / 0-slow 1-normal
    //     bits 3-4 indicate AF mode / 0-normal, 1-interval, 2-zoom trigger
    // VV:
    //     bit 0 indicates zooming status / 0-stopped, 1-executing
    //     bit 1 indicates focusing status
    //     bit 2 indicates camera memory recall status / 0-stopped, 1-executing
    //     bit 3 indicates low contrast detection
    CAM_IMAGE_INQUIRY: [
        0x09,
        0x7e,
        0x7e,
        0x01
    ],
    // 0w 0w 0v 0v 0a 0b 0c AA BB CC DD EE FF
    // w: R gain
    // v: B gain
    // a: WB mode
    // b: aperture gain
    // c: exposure mode
    // AA:
    //     bit 0 slow shutter / 1-auto, 0-manual
    //     bit 1 exposure comp
    //     bit 2 backlight
    //     bit 3 unused
    //     bit 4 wide D / 0-off, 1-other
    //     bit 5 High Res
    // BB: shutter position
    // CC: iris position
    // DD: gain position
    // EE: brightness
    // FF: exposure
    // == COMMAND ONLY CONSTANTS ==
    // command constants (not available on inquiries)
    CMD_CAM_VAL_RESET: 0x00,
    CMD_CAM_VAL_CLEAR: 0x01,
    CMD_CAM_VAL_UP: 0x02,
    CMD_CAM_VAL_DOWN: 0x03,
    CMD_CAM_ZOOM_STOP: 0x00,
    CMD_CAM_ZOOM_TELE: 0x02,
    CMD_CAM_ZOOM_WIDE: 0x03,
    CMD_CAM_ZOOM_TELE_WITH_SPEED: 0x20,
    CMD_CAM_ZOOM_WIDE_WITH_SPEED: 0x30,
    CMD_CAM_FOCUS_STOP: 0x00,
    CMD_CAM_FOCUS_FAR: 0x02,
    CMD_CAM_FOCUS_NEAR: 0x03,
    CMD_CAM_FOCUS_FAR_WITH_SPEED: 0x20,
    CMD_CAM_FOCUS_NEAR_WITH_SPEED: 0x30,
    CMD_CAM_FOCUS_TRIGGER_NOW: 0x01,
    CMD_CAM_FOCUS_TRIGGER_INF: 0x02,
    CMD_CAM_WB_TRIGGER_NOW: 0x05,
    // == OTHER DATA CONSTANTS ==
    // data constants
    DATA_RESET: 0x00,
    DATA_MORE: 0x02,
    DATA_LESS: 0x03,
    DATA_ONVAL: 0x02,
    DATA_OFFVAL: 0x03,
    DATA_TOGGLEVAL: 0x10,
    DATA_MEMORY_RESET: 0x00,
    DATA_MEMORY_SET: 0x01,
    DATA_MEMORY_RECALL: 0x02,
    DATA_IR_CORRECTION_ENABLED: 0x01,
    DATA_CAM_FOCUS_MODE_AUTO: 0x02,
    DATA_CAM_FOCUS_MODE_MANUAL: 0x03,
    DATA_CAM_FOCUS_MODE_TOGGLE: 0x10,
    DATA_CAM_AUTOFOCUS_ON_MOVEMENT: 0x00,
    DATA_CAM_AUTOFOCUS_ON_INTERVAL: 0x01,
    DATA_CAM_AUTOFOCUS_ON_ZOOM: 0x02,
    DATA_CAM_WB_MODE_AUTO: 0x00,
    DATA_CAM_WB_MODE_INDOOR: 0x01,
    DATA_CAM_WB_MODE_OUTDOOR: 0x02,
    DATA_CAM_WB_MODE_ON_TRIGGER: 0x03,
    DATA_CAM_WB_MODE_MANUAL: 0x04,
    DATA_CAM_EXPOSURE_MODE_AUTO: 0x00,
    DATA_CAM_EXPOSURE_MODE_MANUAL: 0x03,
    DATA_CAM_EXPOSURE_MODE_SHUTTER: 0x0a,
    DATA_CAM_EXPOSURE_MODE_IRIS: 0x0b,
    DATA_CAM_EXPOSURE_MODE_BRIGHT: 0x0d,
    DATA_CAM_WIDE_DYN_AUTO: 0x00,
    DATA_CAM_WIDE_DYN_RATIO: 0x01,
    DATA_CAM_WIDE_DYN_ON: 0x02,
    DATA_CAM_WIDE_DYN_OFF: 0x03,
    DATA_CAM_WIDE_DYN_HIST: 0x04,
    // basic effects
    DATA_EFFECT_OFF: 0x00,
    DATA_EFFECT_PASTEL: 0x01,
    DATA_EFFECT_NEGATIVE: 0x02,
    DATA_EFFECT_SEPIA: 0x03,
    DATA_EFFECT_BW: 0x04,
    DATA_EFFECT_SOLAR: 0x05,
    DATA_EFFECT_MOSAIC: 0x06,
    DATA_EFFECT_SLIM: 0x07,
    DATA_EFFECT_STRETCH: 0x08,
    // digital effects
    DATA_EFFECT_STILL: 0x01,
    DATA_EFFECT_FLASH: 0x02,
    DATA_EFFECT_LUMI: 0x03,
    DATA_EFFECT_TRAIL: 0x04,
    DATA_PANLEFT: 0x01,
    DATA_TILTUP: 0x01,
    DATA_PANRIGHT: 0x02,
    DATA_TILTDOWN: 0x02,
    DATA_PANSTOP: 0x00,
    DATA_TILTSTOP: 0x00,
    DATA_PANTILT_UR: 0x01,
    DATA_PANTILT_DL: 0x00,
    // pan status data masks
    PAN_MAXL: 1, // apply to s
    PAN_MAXR: 2, // apply to s
    PAN_MAXU: 4, // apply to s
    PAN_MAXD: 8, // apply to s
    PAN_PAN_UNK: 1, // apply to r
    PAN_TILT_UNK: 1, // apply to q
    PAN_MOVING: 4, // apply to q
    PAN_MOVE_DONE: 8, // apply to q
    PAN_MOVE_FAIL: 12, // apply to q
    PAN_NR: 0, // apply to p
    PAN_INIT: 1, // apply to p
    PAN_READY: 2, // apply to p
    PAN_INIT_FAIL: 3, // apply to p
    // error codes
    ERROR_SYNTAX: 0x02,
    ERROR_BUFFER_FULL: 0x03,
    ERROR_CANCELLED: 0x04,
    ERROR_INVALID_BUFFER: 0x05,
    ERROR_COMMAND_FAILED: 0x41,
    // Zoom and Focus Settings
    SONY_FOCUS_NEAR_LIMIT_SETTINGS: [
        0x1000, //: Over Inf
        0x2000, //: 25 m
        0x3000, //: 11 m
        0x4000, //: 7 m
        0x5000, //: 4.9 m
        0x6000, //: 3.7 m
        0x7000, //: 2.9 m
        0x8000, //: 2.3 m
        0x9000, //: 1.85 m
        0xa000, //: 1.5 m
        0xb000, //: 1.23 m
        0xc000, //: 1 m
        0xd000, //: 30 cm (initial setting)
        0xe000, //: 8 cm
        0xf000 //: 1 cm
    ],
    SONY_OPTICAL_ZOOM_PRESETS: [
        0x0000,
        0x16a1,
        0x2063,
        0x2628,
        0x2a1d,
        0x2d13,
        0x2f6d,
        0x3161,
        0x330d,
        0x3486,
        0x35d7,
        0x3709,
        0x3820,
        0x3920,
        0x3a0a,
        0x3add,
        0x3b9c,
        0x3c46,
        0x3cdc,
        0x3d60,
        0x3dd4,
        0x3e39,
        0x3e90,
        0x3edc,
        0x3f1e,
        0x3f57,
        0x3f8a,
        0x3fb6,
        0x3fdc,
        0x4000
    ],
    SONY_DIGITAL_ZOOM_PRESETS: [
        0x4000,
        0x6000,
        0x6a80,
        0x7000,
        0x7300,
        0x7540,
        0x76c0,
        0x7800,
        0x78c0,
        0x7980,
        0x7a00,
        0x7ac0
    ]
};
exports.Constants = Constants;
//# sourceMappingURL=Constants.js.map