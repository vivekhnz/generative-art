import * as Sketch from 'sketch-js';

abstract class Context {
    // options
    type: 'canvas' | 'webgl' | 'dom';
    fullscreen: boolean;
    autostart: boolean;
    autoclear: boolean;
    autopause: boolean;
    container: HTMLElement;
    interval: number;
    globals: boolean;
    retina: boolean;
    eventTarget: HTMLElement;

    // instance properties
    mouse: {
        x: number;
        y: number;
        ox: number;
        oy: number;
        dx: number;
        dy: number;
    };
    touches: TouchList;
    dragging: boolean;
    running: boolean;
    width: number;
    height: number;
    keys: { [key: string]: boolean };
    millis: number;
    now: number;
    dt: number;
}

export class Canvas extends Context {
    // constructor
    constructor() {
        super();
        this.type = 'canvas';
    }

    // canvas properties
    canvas: HTMLCanvasElement;
    fillStyle: string | CanvasGradient | CanvasPattern;
    font: string;
    globalAlpha: number;
    globalCompositeOperation: string;
    imageSmoothingEnabled: boolean;
    lineCap: string;
    lineDashOffset: number;
    lineJoin: string;
    lineWidth: number;
    miterLimit: number;
    msFillRule: string;
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    textAlign: string;
    textBaseline: string;
    mozImageSmoothingEnabled: boolean;
    webkitImageSmoothingEnabled: boolean;
    oImageSmoothingEnabled: boolean;

    // canvas methods
    beginPath(): void {
        throw new Error('Method not implemented.');
    }
    clearRect(x: number, y: number, w: number, h: number): void {
        throw new Error('Method not implemented.');
    }
    clip(fillRule?: string): void {
        throw new Error('Method not implemented.');
    }
    createImageData(imageDataOrSw: number | ImageData, sh?: number): ImageData {
        throw new Error('Method not implemented.');
    }
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient {
        throw new Error('Method not implemented.');
    }
    createPattern(image: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement, repetition: string): CanvasPattern {
        throw new Error('Method not implemented.');
    }
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient {
        throw new Error('Method not implemented.');
    }
    drawFocusIfNeeded(element: Element): void {
        throw new Error('Method not implemented.');
    }
    drawImage(image: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void {
        throw new Error('Method not implemented.');
    }
    fill(fillRule?: string): void {
        throw new Error('Method not implemented.');
    }
    fillRect(x: number, y: number, w: number, h: number): void {
        throw new Error('Method not implemented.');
    }
    fillText(text: string, x: number, y: number, maxWidth?: number): void {
        throw new Error('Method not implemented.');
    }
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData {
        throw new Error('Method not implemented.');
    }
    getLineDash(): number[] {
        throw new Error('Method not implemented.');
    }
    isPointInPath(x: number, y: number, fillRule?: string): boolean {
        throw new Error('Method not implemented.');
    }
    measureText(text: string): TextMetrics {
        throw new Error('Method not implemented.');
    }
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void {
        throw new Error('Method not implemented.');
    }
    restore(): void {
        throw new Error('Method not implemented.');
    }
    rotate(angle: number): void {
        throw new Error('Method not implemented.');
    }
    save(): void {
        throw new Error('Method not implemented.');
    }
    scale(x: number, y: number): void {
        throw new Error('Method not implemented.');
    }
    setLineDash(segments: number[]): void {
        throw new Error('Method not implemented.');
    }
    setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void {
        throw new Error('Method not implemented.');
    }
    stroke(path?: Path2D): void {
        throw new Error('Method not implemented.');
    }
    strokeRect(x: number, y: number, w: number, h: number): void {
        throw new Error('Method not implemented.');
    }
    strokeText(text: string, x: number, y: number, maxWidth?: number): void {
        throw new Error('Method not implemented.');
    }
    transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void {
        throw new Error('Method not implemented.');
    }
    translate(x: number, y: number): void {
        throw new Error('Method not implemented.');
    }
    toString(): string {
        throw new Error('Method not implemented.');
    }
    toLocaleString(): string {
        throw new Error('Method not implemented.');
    }
    valueOf(): Object {
        throw new Error('Method not implemented.');
    }
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void {
        throw new Error('Method not implemented.');
    }
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
        throw new Error('Method not implemented.');
    }
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
        throw new Error('Method not implemented.');
    }
    closePath(): void {
        throw new Error('Method not implemented.');
    }
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void {
        throw new Error('Method not implemented.');
    }
    lineTo(x: number, y: number): void {
        throw new Error('Method not implemented.');
    }
    moveTo(x: number, y: number): void {
        throw new Error('Method not implemented.');
    }
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
        throw new Error('Method not implemented.');
    }
    rect(x: number, y: number, w: number, h: number): void {
        throw new Error('Method not implemented.');
    }
}

export class WebGL extends Context {
    // constructor
    constructor() {
        super();
        this.type = 'webgl';
    }

    // WebGL properties
    canvas: HTMLCanvasElement;
    drawingBufferHeight: number;
    drawingBufferWidth: number;

    ACTIVE_ATTRIBUTES: number;
    ACTIVE_TEXTURE: number;
    ACTIVE_UNIFORMS: number;
    ALIASED_LINE_WIDTH_RANGE: number;
    ALIASED_POINT_SIZE_RANGE: number;
    ALPHA: number;
    ALPHA_BITS: number;
    ALWAYS: number;
    ARRAY_BUFFER: number;
    ARRAY_BUFFER_BINDING: number;
    ATTACHED_SHADERS: number;
    BACK: number;
    BLEND: number;
    BLEND_COLOR: number;
    BLEND_DST_ALPHA: number;
    BLEND_DST_RGB: number;
    BLEND_EQUATION: number;
    BLEND_EQUATION_ALPHA: number;
    BLEND_EQUATION_RGB: number;
    BLEND_SRC_ALPHA: number;
    BLEND_SRC_RGB: number;
    BLUE_BITS: number;
    BOOL: number;
    BOOL_VEC2: number;
    BOOL_VEC3: number;
    BOOL_VEC4: number;
    BROWSER_DEFAULT_WEBGL: number;
    BUFFER_SIZE: number;
    BUFFER_USAGE: number;
    BYTE: number;
    CCW: number;
    CLAMP_TO_EDGE: number;
    COLOR_ATTACHMENT0: number;
    COLOR_BUFFER_BIT: number;
    COLOR_CLEAR_VALUE: number;
    COLOR_WRITEMASK: number;
    COMPILE_STATUS: number;
    COMPRESSED_TEXTURE_FORMATS: number;
    CONSTANT_ALPHA: number;
    CONSTANT_COLOR: number;
    CONTEXT_LOST_WEBGL: number;
    CULL_FACE: number;
    CULL_FACE_MODE: number;
    CURRENT_PROGRAM: number;
    CURRENT_VERTEX_ATTRIB: number;
    CW: number;
    DECR: number;
    DECR_WRAP: number;
    DELETE_STATUS: number;
    DEPTH_ATTACHMENT: number;
    DEPTH_BITS: number;
    DEPTH_BUFFER_BIT: number;
    DEPTH_CLEAR_VALUE: number;
    DEPTH_COMPONENT: number;
    DEPTH_COMPONENT16: number;
    DEPTH_FUNC: number;
    DEPTH_RANGE: number;
    DEPTH_STENCIL: number;
    DEPTH_STENCIL_ATTACHMENT: number;
    DEPTH_TEST: number;
    DEPTH_WRITEMASK: number;
    DITHER: number;
    DONT_CARE: number;
    DST_ALPHA: number;
    DST_COLOR: number;
    DYNAMIC_DRAW: number;
    ELEMENT_ARRAY_BUFFER: number;
    ELEMENT_ARRAY_BUFFER_BINDING: number;
    EQUAL: number;
    FASTEST: number;
    FLOAT: number;
    FLOAT_MAT2: number;
    FLOAT_MAT3: number;
    FLOAT_MAT4: number;
    FLOAT_VEC2: number;
    FLOAT_VEC3: number;
    FLOAT_VEC4: number;
    FRAGMENT_SHADER: number;
    FRAMEBUFFER: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
    FRAMEBUFFER_BINDING: number;
    FRAMEBUFFER_COMPLETE: number;
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
    FRAMEBUFFER_UNSUPPORTED: number;
    FRONT: number;
    FRONT_AND_BACK: number;
    FRONT_FACE: number;
    FUNC_ADD: number;
    FUNC_REVERSE_SUBTRACT: number;
    FUNC_SUBTRACT: number;
    GENERATE_MIPMAP_HINT: number;
    GEQUAL: number;
    GREATER: number;
    GREEN_BITS: number;
    HIGH_FLOAT: number;
    HIGH_INT: number;
    IMPLEMENTATION_COLOR_READ_FORMAT: number;
    IMPLEMENTATION_COLOR_READ_TYPE: number;
    INCR: number;
    INCR_WRAP: number;
    INT: number;
    INT_VEC2: number;
    INT_VEC3: number;
    INT_VEC4: number;
    INVALID_ENUM: number;
    INVALID_FRAMEBUFFER_OPERATION: number;
    INVALID_OPERATION: number;
    INVALID_VALUE: number;
    INVERT: number;
    KEEP: number;
    LEQUAL: number;
    LESS: number;
    LINEAR: number;
    LINEAR_MIPMAP_LINEAR: number;
    LINEAR_MIPMAP_NEAREST: number;
    LINES: number;
    LINE_LOOP: number;
    LINE_STRIP: number;
    LINE_WIDTH: number;
    LINK_STATUS: number;
    LOW_FLOAT: number;
    LOW_INT: number;
    LUMINANCE: number;
    LUMINANCE_ALPHA: number;
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
    MAX_CUBE_MAP_TEXTURE_SIZE: number;
    MAX_FRAGMENT_UNIFORM_VECTORS: number;
    MAX_RENDERBUFFER_SIZE: number;
    MAX_TEXTURE_IMAGE_UNITS: number;
    MAX_TEXTURE_SIZE: number;
    MAX_VARYING_VECTORS: number;
    MAX_VERTEX_ATTRIBS: number;
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
    MAX_VERTEX_UNIFORM_VECTORS: number;
    MAX_VIEWPORT_DIMS: number;
    MEDIUM_FLOAT: number;
    MEDIUM_INT: number;
    MIRRORED_REPEAT: number;
    NEAREST: number;
    NEAREST_MIPMAP_LINEAR: number;
    NEAREST_MIPMAP_NEAREST: number;
    NEVER: number;
    NICEST: number;
    NONE: number;
    NOTEQUAL: number;
    NO_ERROR: number;
    ONE: number;
    ONE_MINUS_CONSTANT_ALPHA: number;
    ONE_MINUS_CONSTANT_COLOR: number;
    ONE_MINUS_DST_ALPHA: number;
    ONE_MINUS_DST_COLOR: number;
    ONE_MINUS_SRC_ALPHA: number;
    ONE_MINUS_SRC_COLOR: number;
    OUT_OF_MEMORY: number;
    PACK_ALIGNMENT: number;
    POINTS: number;
    POLYGON_OFFSET_FACTOR: number;
    POLYGON_OFFSET_FILL: number;
    POLYGON_OFFSET_UNITS: number;
    RED_BITS: number;
    RENDERBUFFER: number;
    RENDERBUFFER_ALPHA_SIZE: number;
    RENDERBUFFER_BINDING: number;
    RENDERBUFFER_BLUE_SIZE: number;
    RENDERBUFFER_DEPTH_SIZE: number;
    RENDERBUFFER_GREEN_SIZE: number;
    RENDERBUFFER_HEIGHT: number;
    RENDERBUFFER_INTERNAL_FORMAT: number;
    RENDERBUFFER_RED_SIZE: number;
    RENDERBUFFER_STENCIL_SIZE: number;
    RENDERBUFFER_WIDTH: number;
    RENDERER: number;
    REPEAT: number;
    REPLACE: number;
    RGB: number;
    RGB565: number;
    RGB5_A1: number;
    RGBA: number;
    RGBA4: number;
    SAMPLER_2D: number;
    SAMPLER_CUBE: number;
    SAMPLES: number;
    SAMPLE_ALPHA_TO_COVERAGE: number;
    SAMPLE_BUFFERS: number;
    SAMPLE_COVERAGE: number;
    SAMPLE_COVERAGE_INVERT: number;
    SAMPLE_COVERAGE_VALUE: number;
    SCISSOR_BOX: number;
    SCISSOR_TEST: number;
    SHADER_TYPE: number;
    SHADING_LANGUAGE_VERSION: number;
    SHORT: number;
    SRC_ALPHA: number;
    SRC_ALPHA_SATURATE: number;
    SRC_COLOR: number;
    STATIC_DRAW: number;
    STENCIL_ATTACHMENT: number;
    STENCIL_BACK_FAIL: number;
    STENCIL_BACK_FUNC: number;
    STENCIL_BACK_PASS_DEPTH_FAIL: number;
    STENCIL_BACK_PASS_DEPTH_PASS: number;
    STENCIL_BACK_REF: number;
    STENCIL_BACK_VALUE_MASK: number;
    STENCIL_BACK_WRITEMASK: number;
    STENCIL_BITS: number;
    STENCIL_BUFFER_BIT: number;
    STENCIL_CLEAR_VALUE: number;
    STENCIL_FAIL: number;
    STENCIL_FUNC: number;
    STENCIL_INDEX: number;
    STENCIL_INDEX8: number;
    STENCIL_PASS_DEPTH_FAIL: number;
    STENCIL_PASS_DEPTH_PASS: number;
    STENCIL_REF: number;
    STENCIL_TEST: number;
    STENCIL_VALUE_MASK: number;
    STENCIL_WRITEMASK: number;
    STREAM_DRAW: number;
    SUBPIXEL_BITS: number;
    TEXTURE: number;
    TEXTURE0: number;
    TEXTURE1: number;
    TEXTURE10: number;
    TEXTURE11: number;
    TEXTURE12: number;
    TEXTURE13: number;
    TEXTURE14: number;
    TEXTURE15: number;
    TEXTURE16: number;
    TEXTURE17: number;
    TEXTURE18: number;
    TEXTURE19: number;
    TEXTURE2: number;
    TEXTURE20: number;
    TEXTURE21: number;
    TEXTURE22: number;
    TEXTURE23: number;
    TEXTURE24: number;
    TEXTURE25: number;
    TEXTURE26: number;
    TEXTURE27: number;
    TEXTURE28: number;
    TEXTURE29: number;
    TEXTURE3: number;
    TEXTURE30: number;
    TEXTURE31: number;
    TEXTURE4: number;
    TEXTURE5: number;
    TEXTURE6: number;
    TEXTURE7: number;
    TEXTURE8: number;
    TEXTURE9: number;
    TEXTURE_2D: number;
    TEXTURE_BINDING_2D: number;
    TEXTURE_BINDING_CUBE_MAP: number;
    TEXTURE_CUBE_MAP: number;
    TEXTURE_CUBE_MAP_NEGATIVE_X: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
    TEXTURE_CUBE_MAP_POSITIVE_X: number;
    TEXTURE_CUBE_MAP_POSITIVE_Y: number;
    TEXTURE_CUBE_MAP_POSITIVE_Z: number;
    TEXTURE_MAG_FILTER: number;
    TEXTURE_MIN_FILTER: number;
    TEXTURE_WRAP_S: number;
    TEXTURE_WRAP_T: number;
    TRIANGLES: number;
    TRIANGLE_FAN: number;
    TRIANGLE_STRIP: number;
    UNPACK_ALIGNMENT: number;
    UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
    UNPACK_FLIP_Y_WEBGL: number;
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
    UNSIGNED_BYTE: number;
    UNSIGNED_INT: number;
    UNSIGNED_SHORT: number;
    UNSIGNED_SHORT_4_4_4_4: number;
    UNSIGNED_SHORT_5_5_5_1: number;
    UNSIGNED_SHORT_5_6_5: number;
    VALIDATE_STATUS: number;
    VENDOR: number;
    VERSION: number;
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
    VERTEX_ATTRIB_ARRAY_ENABLED: number;
    VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
    VERTEX_ATTRIB_ARRAY_POINTER: number;
    VERTEX_ATTRIB_ARRAY_SIZE: number;
    VERTEX_ATTRIB_ARRAY_STRIDE: number;
    VERTEX_ATTRIB_ARRAY_TYPE: number;
    VERTEX_SHADER: number;
    VIEWPORT: number;
    ZERO: number;

    // WebGL properties
    activeTexture(texture: number): void {
        throw new Error('Method not implemented.');
    }
    attachShader(program: WebGLProgram, shader: WebGLShader): void {
        throw new Error('Method not implemented.');
    }
    bindAttribLocation(program: WebGLProgram, index: number, name: string): void {
        throw new Error('Method not implemented.');
    }
    bindBuffer(target: number, buffer: WebGLBuffer): void {
        throw new Error('Method not implemented.');
    }
    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer): void {
        throw new Error('Method not implemented.');
    }
    bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer): void {
        throw new Error('Method not implemented.');
    }
    bindTexture(target: number, texture: WebGLTexture): void {
        throw new Error('Method not implemented.');
    }
    blendColor(red: number, green: number, blue: number, alpha: number): void {
        throw new Error('Method not implemented.');
    }
    blendEquation(mode: number): void {
        throw new Error('Method not implemented.');
    }
    blendEquationSeparate(modeRGB: number, modeAlpha: number): void {
        throw new Error('Method not implemented.');
    }
    blendFunc(sfactor: number, dfactor: number): void {
        throw new Error('Method not implemented.');
    }
    blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void {
        throw new Error('Method not implemented.');
    }
    bufferData(target: number, size: number | ArrayBufferView | ArrayBuffer, usage: number): void {
        throw new Error('Method not implemented.');
    }
    bufferSubData(target: number, offset: number, data: ArrayBufferView | ArrayBuffer): void {
        throw new Error('Method not implemented.');
    }
    checkFramebufferStatus(target: number): number {
        throw new Error('Method not implemented.');
    }
    clear(mask: number): void {
        throw new Error('Method not implemented.');
    }
    clearColor(red: number, green: number, blue: number, alpha: number): void {
        throw new Error('Method not implemented.');
    }
    clearDepth(depth: number): void {
        throw new Error('Method not implemented.');
    }
    clearStencil(s: number): void {
        throw new Error('Method not implemented.');
    }
    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void {
        throw new Error('Method not implemented.');
    }
    compileShader(shader: WebGLShader): void {
        throw new Error('Method not implemented.');
    }
    compressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, data: ArrayBufferView): void {
        throw new Error('Method not implemented.');
    }
    compressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, data: ArrayBufferView): void {
        throw new Error('Method not implemented.');
    }
    copyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number): void {
        throw new Error('Method not implemented.');
    }
    copyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void {
        throw new Error('Method not implemented.');
    }
    createBuffer(): WebGLBuffer {
        throw new Error('Method not implemented.');
    }
    createFramebuffer(): WebGLFramebuffer {
        throw new Error('Method not implemented.');
    }
    createProgram(): WebGLProgram {
        throw new Error('Method not implemented.');
    }
    createRenderbuffer(): WebGLRenderbuffer {
        throw new Error('Method not implemented.');
    }
    createShader(type: number): WebGLShader {
        throw new Error('Method not implemented.');
    }
    createTexture(): WebGLTexture {
        throw new Error('Method not implemented.');
    }
    cullFace(mode: number): void {
        throw new Error('Method not implemented.');
    }
    deleteBuffer(buffer: WebGLBuffer): void {
        throw new Error('Method not implemented.');
    }
    deleteFramebuffer(framebuffer: WebGLFramebuffer): void {
        throw new Error('Method not implemented.');
    }
    deleteProgram(program: WebGLProgram): void {
        throw new Error('Method not implemented.');
    }
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer): void {
        throw new Error('Method not implemented.');
    }
    deleteShader(shader: WebGLShader): void {
        throw new Error('Method not implemented.');
    }
    deleteTexture(texture: WebGLTexture): void {
        throw new Error('Method not implemented.');
    }
    depthFunc(func: number): void {
        throw new Error('Method not implemented.');
    }
    depthMask(flag: boolean): void {
        throw new Error('Method not implemented.');
    }
    depthRange(zNear: number, zFar: number): void {
        throw new Error('Method not implemented.');
    }
    detachShader(program: WebGLProgram, shader: WebGLShader): void {
        throw new Error('Method not implemented.');
    }
    disable(cap: number): void {
        throw new Error('Method not implemented.');
    }
    disableVertexAttribArray(index: number): void {
        throw new Error('Method not implemented.');
    }
    drawArrays(mode: number, first: number, count: number): void {
        throw new Error('Method not implemented.');
    }
    drawElements(mode: number, count: number, type: number, offset: number): void {
        throw new Error('Method not implemented.');
    }
    enable(cap: number): void {
        throw new Error('Method not implemented.');
    }
    enableVertexAttribArray(index: number): void {
        throw new Error('Method not implemented.');
    }
    finish(): void {
        throw new Error('Method not implemented.');
    }
    flush(): void {
        throw new Error('Method not implemented.');
    }
    framebufferRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: WebGLRenderbuffer): void {
        throw new Error('Method not implemented.');
    }
    framebufferTexture2D(target: number, attachment: number, textarget: number, texture: WebGLTexture, level: number): void {
        throw new Error('Method not implemented.');
    }
    frontFace(mode: number): void {
        throw new Error('Method not implemented.');
    }
    generateMipmap(target: number): void {
        throw new Error('Method not implemented.');
    }
    getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo {
        throw new Error('Method not implemented.');
    }
    getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo {
        throw new Error('Method not implemented.');
    }
    getAttachedShaders(program: WebGLProgram): WebGLShader[] {
        throw new Error('Method not implemented.');
    }
    getAttribLocation(program: WebGLProgram, name: string): number {
        throw new Error('Method not implemented.');
    }
    getBufferParameter(target: number, pname: number) {
        throw new Error('Method not implemented.');
    }
    getContextAttributes(): WebGLContextAttributes {
        throw new Error('Method not implemented.');
    }
    getError(): number {
        throw new Error('Method not implemented.');
    }
    getExtension(name: string) {
        throw new Error('Method not implemented.');
    }
    getFramebufferAttachmentParameter(target: number, attachment: number, pname: number) {
        throw new Error('Method not implemented.');
    }
    getParameter(pname: number) {
        throw new Error('Method not implemented.');
    }
    getProgramInfoLog(program: WebGLProgram): string {
        throw new Error('Method not implemented.');
    }
    getProgramParameter(program: WebGLProgram, pname: number) {
        throw new Error('Method not implemented.');
    }
    getRenderbufferParameter(target: number, pname: number) {
        throw new Error('Method not implemented.');
    }
    getShaderInfoLog(shader: WebGLShader): string {
        throw new Error('Method not implemented.');
    }
    getShaderParameter(shader: WebGLShader, pname: number) {
        throw new Error('Method not implemented.');
    }
    getShaderPrecisionFormat(shadertype: number, precisiontype: number): WebGLShaderPrecisionFormat {
        throw new Error('Method not implemented.');
    }
    getShaderSource(shader: WebGLShader): string {
        throw new Error('Method not implemented.');
    }
    getSupportedExtensions(): string[] {
        throw new Error('Method not implemented.');
    }
    getTexParameter(target: number, pname: number) {
        throw new Error('Method not implemented.');
    }
    getUniform(program: WebGLProgram, location: WebGLUniformLocation) {
        throw new Error('Method not implemented.');
    }
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation {
        throw new Error('Method not implemented.');
    }
    getVertexAttrib(index: number, pname: number) {
        throw new Error('Method not implemented.');
    }
    getVertexAttribOffset(index: number, pname: number): number {
        throw new Error('Method not implemented.');
    }
    hint(target: number, mode: number): void {
        throw new Error('Method not implemented.');
    }
    isBuffer(buffer: WebGLBuffer): boolean {
        throw new Error('Method not implemented.');
    }
    isContextLost(): boolean {
        throw new Error('Method not implemented.');
    }
    isEnabled(cap: number): boolean {
        throw new Error('Method not implemented.');
    }
    isFramebuffer(framebuffer: WebGLFramebuffer): boolean {
        throw new Error('Method not implemented.');
    }
    isProgram(program: WebGLProgram): boolean {
        throw new Error('Method not implemented.');
    }
    isRenderbuffer(renderbuffer: WebGLRenderbuffer): boolean {
        throw new Error('Method not implemented.');
    }
    isShader(shader: WebGLShader): boolean {
        throw new Error('Method not implemented.');
    }
    isTexture(texture: WebGLTexture): boolean {
        throw new Error('Method not implemented.');
    }
    lineWidth(width: number): void {
        throw new Error('Method not implemented.');
    }
    linkProgram(program: WebGLProgram): void {
        throw new Error('Method not implemented.');
    }
    pixelStorei(pname: number, param: number | boolean): void {
        throw new Error('Method not implemented.');
    }
    polygonOffset(factor: number, units: number): void {
        throw new Error('Method not implemented.');
    }
    readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void {
        throw new Error('Method not implemented.');
    }
    renderbufferStorage(target: number, internalformat: number, width: number, height: number): void {
        throw new Error('Method not implemented.');
    }
    sampleCoverage(value: number, invert: boolean): void {
        throw new Error('Method not implemented.');
    }
    scissor(x: number, y: number, width: number, height: number): void {
        throw new Error('Method not implemented.');
    }
    shaderSource(shader: WebGLShader, source: string): void {
        throw new Error('Method not implemented.');
    }
    stencilFunc(func: number, ref: number, mask: number): void {
        throw new Error('Method not implemented.');
    }
    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void {
        throw new Error('Method not implemented.');
    }
    stencilMask(mask: number): void {
        throw new Error('Method not implemented.');
    }
    stencilMaskSeparate(face: number, mask: number): void {
        throw new Error('Method not implemented.');
    }
    stencilOp(fail: number, zfail: number, zpass: number): void {
        throw new Error('Method not implemented.');
    }
    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void {
        throw new Error('Method not implemented.');
    }
    texImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels?: ArrayBufferView): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, pixels?: HTMLCanvasElement | ImageData | HTMLVideoElement | HTMLImageElement): void;
    texImage2D(target: any, level: any, internalformat: any, width: any, height: any, border?: any, format?: any, type?: any, pixels?: any) {
        throw new Error('Method not implemented.');
    }
    texParameterf(target: number, pname: number, param: number): void {
        throw new Error('Method not implemented.');
    }
    texParameteri(target: number, pname: number, param: number): void {
        throw new Error('Method not implemented.');
    }
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels?: ArrayBufferView): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, pixels?: HTMLCanvasElement | ImageData | HTMLVideoElement | HTMLImageElement): void;
    texSubImage2D(target: any, level: any, xoffset: any, yoffset: any, width: any, height: any, format?: any, type?: any, pixels?: any) {
        throw new Error('Method not implemented.');
    }
    uniform1f(location: WebGLUniformLocation, x: number): void {
        throw new Error('Method not implemented.');
    }
    uniform1fv(location: WebGLUniformLocation, v: Float32Array | number[]): void {
        throw new Error('Method not implemented.');
    }
    uniform1i(location: WebGLUniformLocation, x: number): void {
        throw new Error('Method not implemented.');
    }
    uniform1iv(location: WebGLUniformLocation, v: number[] | Int32Array): void {
        throw new Error('Method not implemented.');
    }
    uniform2f(location: WebGLUniformLocation, x: number, y: number): void {
        throw new Error('Method not implemented.');
    }
    uniform2fv(location: WebGLUniformLocation, v: Float32Array | number[]): void {
        throw new Error('Method not implemented.');
    }
    uniform2i(location: WebGLUniformLocation, x: number, y: number): void {
        throw new Error('Method not implemented.');
    }
    uniform2iv(location: WebGLUniformLocation, v: number[] | Int32Array): void {
        throw new Error('Method not implemented.');
    }
    uniform3f(location: WebGLUniformLocation, x: number, y: number, z: number): void {
        throw new Error('Method not implemented.');
    }
    uniform3fv(location: WebGLUniformLocation, v: Float32Array | number[]): void {
        throw new Error('Method not implemented.');
    }
    uniform3i(location: WebGLUniformLocation, x: number, y: number, z: number): void {
        throw new Error('Method not implemented.');
    }
    uniform3iv(location: WebGLUniformLocation, v: number[] | Int32Array): void {
        throw new Error('Method not implemented.');
    }
    uniform4f(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void {
        throw new Error('Method not implemented.');
    }
    uniform4fv(location: WebGLUniformLocation, v: Float32Array | number[]): void {
        throw new Error('Method not implemented.');
    }
    uniform4i(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void {
        throw new Error('Method not implemented.');
    }
    uniform4iv(location: WebGLUniformLocation, v: number[] | Int32Array): void {
        throw new Error('Method not implemented.');
    }
    uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array | number[]): void {
        throw new Error('Method not implemented.');
    }
    uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array | number[]): void {
        throw new Error('Method not implemented.');
    }
    uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array | number[]): void {
        throw new Error('Method not implemented.');
    }
    useProgram(program: WebGLProgram): void {
        throw new Error('Method not implemented.');
    }
    validateProgram(program: WebGLProgram): void {
        throw new Error('Method not implemented.');
    }
    vertexAttrib1f(indx: number, x: number): void {
        throw new Error('Method not implemented.');
    }
    vertexAttrib1fv(indx: number, values: Float32Array | number[]): void {
        throw new Error('Method not implemented.');
    }
    vertexAttrib2f(indx: number, x: number, y: number): void {
        throw new Error('Method not implemented.');
    }
    vertexAttrib2fv(indx: number, values: Float32Array | number[]): void {
        throw new Error('Method not implemented.');
    }
    vertexAttrib3f(indx: number, x: number, y: number, z: number): void {
        throw new Error('Method not implemented.');
    }
    vertexAttrib3fv(indx: number, values: Float32Array | number[]): void {
        throw new Error('Method not implemented.');
    }
    vertexAttrib4f(indx: number, x: number, y: number, z: number, w: number): void {
        throw new Error('Method not implemented.');
    }
    vertexAttrib4fv(indx: number, values: Float32Array | number[]): void {
        throw new Error('Method not implemented.');
    }
    vertexAttribPointer(indx: number, size: number, type: number, normalized: boolean, stride: number, offset: number): void {
        throw new Error('Method not implemented.');
    }
    viewport(x: number, y: number, width: number, height: number): void {
        throw new Error('Method not implemented.');
    }
}

const OVERRIDABLE_METHODS = [
    'setup', 'update', 'draw', 'resize',
    'touchstart', 'touchmove', 'touchend',
    'mouseover', 'mousemove', 'mouseout',
    'mousedown', 'mouseup', 'click',
    'keydown', 'keyup'
];

export function create(sketchClass: { new (): Context }) {
    const options = {};
    
    // copy props from sketch class
    const sketch: Context = new sketchClass();
    for (const prop in sketch) {
        if (OVERRIDABLE_METHODS.indexOf(prop) >= 0
            || sketch.hasOwnProperty(prop)) {
            options[prop] = sketch[prop];
        }
    }

    return Sketch.create(options);
}