<!-- @format -->

<template>
  <div class="styles-container">
    <h2>50种消息样式-悬浮版</h2>

    <!-- 极简主义风格 -->
    <section class="style-section">
      <h1>一、极简主义风格</h1>
      <h3>2、纯色浮动按钮</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button type="default" @click="showFloatingMessage('default')"
            >纯色浮动按钮</el-button
          >
          <el-button type="success" @click="showFloatingMessage('success')"
            >纯色浮动按钮</el-button
          >
          <el-button type="warning" @click="showFloatingMessage('warning')"
            >纯色浮动按钮</el-button
          >
          <el-button type="info" @click="showFloatingMessage('info')"
            >纯色浮动按钮</el-button
          >
          <el-button type="danger" @click="showFloatingMessage('error')"
            >纯色浮动按钮</el-button
          ></el-space
        >
      </div>
      <h3>2、呼吸灯效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showBreathingMessage('default')"
            >呼吸灯效果</el-button
          >
          <el-button type="success" @click="showBreathingMessage('success')"
            >呼吸灯效果</el-button
          >
          <el-button type="warning" @click="showBreathingMessage('warning')"
            >呼吸灯效果</el-button
          >
          <el-button type="info" @click="showBreathingMessage('info')"
            >呼吸灯效果</el-button
          >
          <el-button type="danger" @click="showBreathingMessage('error')"
            >呼吸灯效果</el-button
          >
        </el-space>
      </div>
      <h3>3、极简线条</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showMinimalistMessage('default')"
            >极简线条</el-button
          >

          <el-button type="success" @click="showMinimalistMessage('success')"
            >极简线条</el-button
          >
          <el-button type="info" @click="showMinimalistMessage('info')"
            >极简线条</el-button
          >
          <el-button type="danger" @click="showMinimalistMessage('error')"
            >极简线条</el-button
          >
          <el-button type="warning" @click="showMinimalistMessage('warning')"
            >极简线条</el-button
          >
        </el-space>
      </div>
      <h3>4、点状提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showDotMessage('default')">点状提示</el-button>

          <el-button type="danger" @click="showDotMessage('error')"
            >点状提示</el-button
          >
          <el-button type="warning" @click="showDotMessage('warning')"
            >点状提示</el-button
          >
          <el-button type="info" @click="showDotMessage('info')"
            >点状提示</el-button
          >
          <el-button type="success" @click="showDotMessage('success')"
            >点状提示</el-button
          >
        </el-space>
      </div>
      <h3>5、微交互效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showMicroInteractionMessage('default')"
            >微交互效果</el-button
          >
          <el-button
            type="success"
            @click="showMicroInteractionMessage('success')"
            >微交互效果</el-button
          >
          <el-button
            type="warning"
            @click="showMicroInteractionMessage('warning')"
            >微交互效果</el-button
          >
          <el-button type="info" @click="showMicroInteractionMessage('info')"
            >微交互效果</el-button
          >
          <el-button type="danger" @click="showMicroInteractionMessage('error')"
            >微交互效果</el-button
          >
        </el-space>
      </div>
    </section>

    <!-- 玻璃拟态风格 -->
    <section class="style-section">
      <h1>二、玻璃拟态风格</h1>
      <h3>1、毛玻璃悬浮卡片</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showGlassmorphismMessage('default')"
            >毛玻璃悬浮卡片</el-button
          >
          <el-button type="success" @click="showGlassmorphismMessage('success')"
            >毛玻璃悬浮卡片</el-button
          >
          <el-button type="warning" @click="showGlassmorphismMessage('warning')"
            >毛玻璃悬浮卡片</el-button
          >
          <el-button type="danger" @click="showGlassmorphismMessage('error')"
            >毛玻璃悬浮卡片</el-button
          >
          <el-button type="info" @click="showGlassmorphismMessage('info')"
            >毛玻璃悬浮卡片</el-button
          >
        </el-space>
      </div>
      <h3>2、彩虹折射按钮</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showRainbowRefractionMessage"
            >彩虹折射按钮</el-button
          >
          <el-button
            type="danger"
            @click="showRainbowRefractionMessage('error')"
            >彩虹折射按钮</el-button
          >
          <el-button
            type="warning"
            @click="showRainbowRefractionMessage('warning')"
            >彩虹折射按钮</el-button
          >
          <el-button type="info" @click="showRainbowRefractionMessage('info')"
            >彩虹折射按钮</el-button
          >
          <el-button
            type="success"
            @click="showRainbowRefractionMessage('success')"
            >彩虹折射按钮</el-button
          >
        </el-space>
      </div>
      <h3>3、磨砂玻璃效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showFrostedGlassMessage">磨砂玻璃效果</el-button>
          <el-button type="danger" @click="showFrostedGlassMessage('error')"
            >磨砂玻璃效果</el-button
          >
          <el-button type="warning" @click="showFrostedGlassMessage('warning')"
            >磨砂玻璃效果</el-button
          >
          <el-button type="info" @click="showFrostedGlassMessage('info')"
            >磨砂玻璃效果</el-button
          >
          <el-button type="success" @click="showFrostedGlassMessage('success')"
            >磨砂玻璃效果</el-button
          >
        </el-space>
      </div>
      <h3>4、玻璃卡片</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showGlassCardMessage">玻璃卡片</el-button>
          <el-button type="danger" @click="showGlassCardMessage('error')"
            >玻璃卡片</el-button
          >
          <el-button type="warning" @click="showGlassCardMessage('warning')"
            >玻璃卡片</el-button
          >
          <el-button type="info" @click="showGlassCardMessage('info')"
            >玻璃卡片</el-button
          >
          <el-button type="success" @click="showGlassCardMessage('success')"
            >玻璃卡片</el-button
          >
        </el-space>
      </div>
      <h3>5、半透明效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showTranslucentMessage">半透明效果</el-button>
          <el-button type="danger" @click="showTranslucentMessage('error')"
            >半透明效果</el-button
          >
          <el-button type="warning" @click="showTranslucentMessage('warning')"
            >半透明效果</el-button
          >
          <el-button type="info" @click="showTranslucentMessage('info')"
            >半透明效果</el-button
          >
          <el-button type="success" @click="showTranslucentMessage('success')"
            >半透明效果</el-button
          >
        </el-space>
      </div>
    </section>

    <!-- 3D立体风格 -->
    <section class="style-section">
      <h1>三、3D立体风格</h1>
      <h3>1、3D立方体效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="show3DCubeMessage">3D立方体效果</el-button>
          <el-button type="danger" @click="show3DCubeMessage('error')"
            >3D立方体效果</el-button
          >
          <el-button type="warning" @click="show3DCubeMessage('warning')"
            >3D立方体效果</el-button
          >
          <el-button type="info" @click="show3DCubeMessage('info')"
            >3D立方体效果</el-button
          >
          <el-button type="success" @click="show3DCubeMessage('success')"
            >3D立方体效果</el-button
          >
        </el-space>
      </div>
      <h3>2、立体进度条</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="show3DProgressMessage">立体进度条</el-button>
          <el-button type="danger" @click="show3DProgressMessage('error')"
            >立体进度条</el-button
          >
          <el-button type="warning" @click="show3DProgressMessage('warning')"
            >立体进度条</el-button
          >
          <el-button type="info" @click="show3DProgressMessage('info')"
            >立体进度条</el-button
          >
          <el-button type="success" @click="show3DProgressMessage('success')"
            >立体进度条</el-button
          >
        </el-space>
      </div>
      <h3>3、3D卡片</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="show3DCardMessage">3D卡片</el-button>
          <el-button type="danger" @click="show3DCardMessage('error')"
            >3D卡片</el-button
          >
          <el-button type="warning" @click="show3DCardMessage('warning')"
            >3D卡片</el-button
          >
          <el-button type="info" @click="show3DCardMessage('info')"
            >3D卡片</el-button
          >
          <el-button type="success" @click="show3DCardMessage('success')"
            >3D卡片</el-button
          >
        </el-space>
      </div>
      <h3>4、立体阴影</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="show3DShadowMessage">立体阴影</el-button>
          <el-button type="danger" @click="show3DShadowMessage('error')"
            >立体阴影</el-button
          >
          <el-button type="warning" @click="show3DShadowMessage('warning')"
            >立体阴影</el-button
          >
          <el-button type="info" @click="show3DShadowMessage('info')"
            >立体阴影</el-button
          >
          <el-button type="success" @click="show3DShadowMessage('success')"
            >立体阴影</el-button
          >
        </el-space>
      </div>
      <h3>5、3D按钮效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="show3DButtonMessage">3D按钮效果</el-button>
          <el-button type="danger" @click="show3DButtonMessage('error')"
            >3D按钮效果</el-button
          >
          <el-button type="warning" @click="show3DButtonMessage('warning')"
            >3D按钮效果</el-button
          >
          <el-button type="info" @click="show3DButtonMessage('info')"
            >3D按钮效果</el-button
          >
          <el-button type="success" @click="show3DButtonMessage('success')"
            >3D按钮效果</el-button
          >
        </el-space>
      </div>
    </section>

    <!-- 复古潮流风格 -->
    <section class="style-section">
      <h1>四、复古潮流风格</h1>
      <h3>1、像素风格</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showPixelMessage">像素风格</el-button>
          <el-button type="danger" @click="showPixelMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showPixelMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showPixelMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showPixelMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>2、CRT屏幕效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showCRTMessage">CRT屏幕效果</el-button>
          <el-button type="danger" @click="showCRTMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showCRTMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showCRTMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showCRTMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>3、复古电视机</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showRetroTVMessage">复古电视机</el-button>
          <el-button type="danger" @click="showRetroTVMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showRetroTVMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showRetroTVMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showRetroTVMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>4、复古纸张</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showVintageMessage">复古纸张</el-button>
          <el-button type="danger" @click="showVintageMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showVintageMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showVintageMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showVintageMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>5、复古电脑</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showRetroComputerMessage">复古电脑</el-button>
          <el-button type="danger" @click="showRetroComputerMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showRetroComputerMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showRetroComputerMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showRetroComputerMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
    </section>

    <!-- 液态动效风格 -->
    <section class="style-section">
      <h1>五、液态动效风格</h1>
      <h3>1、水滴融合效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showWaterDropMessage">水滴融合效果</el-button>
          <el-button type="danger" @click="showWaterDropMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showWaterDropMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showWaterDropMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showWaterDropMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>2、流动背景</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showFlowingBackgroundMessage">流动背景</el-button>
          <el-button
            type="danger"
            @click="showFlowingBackgroundMessage('error')"
            >袁果锅</el-button
          >
          <el-button
            type="warning"
            @click="showFlowingBackgroundMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showFlowingBackgroundMessage('info')"
            >袁果锅</el-button
          >
          <el-button
            type="success"
            @click="showFlowingBackgroundMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>3、液态按钮</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showLiquidButtonMessage">液态按钮</el-button>
          <el-button type="danger" @click="showLiquidButtonMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showLiquidButtonMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showLiquidButtonMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showLiquidButtonMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>4、液态斑点</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showBlobMessage">液态斑点</el-button>
          <el-button type="danger" @click="showBlobMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showBlobMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showBlobMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showBlobMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>5、波浪效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showWaveMessage">波浪效果</el-button>
          <el-button type="danger" @click="showWaveMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showWaveMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showWaveMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showWaveMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
    </section>

    <!-- 赛博朋克风格 -->
    <section class="style-section">
      <h1>六、赛博朋克风格</h1>
      <h3>1、霓虹故障效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showNeonGlitchMessage">霓虹故障效果</el-button>
          <el-button type="danger" @click="showNeonGlitchMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showNeonGlitchMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showNeonGlitchMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showNeonGlitchMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>2、全息投影效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showHologramKeyboardMessage"
            >全息投影效果</el-button
          >
          <el-button type="danger" @click="showHologramKeyboardMessage('error')"
            >袁果锅</el-button
          >
          <el-button
            type="warning"
            @click="showHologramKeyboardMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showHologramKeyboardMessage('info')"
            >袁果锅</el-button
          >
          <el-button
            type="success"
            @click="showHologramKeyboardMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>3、赛博朋克风格</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showCyberpunkMessage">赛博朋克风格</el-button>
          <el-button type="danger" @click="showCyberpunkMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showCyberpunkMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showCyberpunkMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showCyberpunkMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>4、故障文字</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showGlitchTextMessage">故障文字</el-button>
          <el-button type="danger" @click="showGlitchTextMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showGlitchTextMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showGlitchTextMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showGlitchTextMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>5、霓虹边框</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showNeonBorderMessage">霓虹边框</el-button>
          <el-button type="danger" @click="showNeonBorderMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showNeonBorderMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showNeonBorderMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showNeonBorderMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
    </section>

    <!-- 自然生态风格 -->
    <section class="style-section">
      <h1>七、自然生态风格</h1>
      <h3>1、树叶生长效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showLeafGrowthMessage">树叶生长效果</el-button>
          <el-button type="danger" @click="showLeafGrowthMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showLeafGrowthMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showLeafGrowthMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showLeafGrowthMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>2、水波纹效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showWaterRippleMessage">水波纹效果</el-button>
          <el-button type="danger" @click="showWaterRippleMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showWaterRippleMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showWaterRippleMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showWaterRippleMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>3、自然卡片</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showNatureCardMessage">自然卡片</el-button>
          <el-button type="danger" @click="showNatureCardMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showNatureCardMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showNatureCardMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showNatureCardMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>4、木纹质感</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showWoodTextureMessage">木纹质感</el-button>
          <el-button type="danger" @click="showWoodTextureMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showWoodTextureMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showWoodTextureMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showWoodTextureMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>5、叶纹图案</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showLeafPatternMessage">叶纹图案</el-button>
          <el-button type="danger" @click="showLeafPatternMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showLeafPatternMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showLeafPatternMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showLeafPatternMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
    </section>

    <!-- 实用功能型风格 -->
    <section class="style-section">
      <h1>八、实用功能型风格</h1>
      <h3>1、多级悬浮球</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showFloatingBallMessage">多级悬浮球</el-button>
          <el-button type="danger" @click="showFloatingBallMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showFloatingBallMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showFloatingBallMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showFloatingBallMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>2、智能折叠效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showSmartTabMessage">智能折叠效果</el-button>
          <el-button type="danger" @click="showSmartTabMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showSmartTabMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showSmartTabMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showSmartTabMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>3、状态指示灯</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showStatusIndicatorMessage">状态指示灯</el-button>
          <el-button type="danger" @click="showStatusIndicatorMessage('error')"
            >袁果锅</el-button
          >
          <el-button
            type="warning"
            @click="showStatusIndicatorMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showStatusIndicatorMessage('info')"
            >袁果锅</el-button
          >
          <el-button
            type="success"
            @click="showStatusIndicatorMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>4、功能卡片</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showFunctionalCardMessage">功能卡片</el-button>
          <el-button type="danger" @click="showFunctionalCardMessage('error')"
            >袁果锅</el-button
          >
          <el-button
            type="warning"
            @click="showFunctionalCardMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showFunctionalCardMessage('info')"
            >袁果锅</el-button
          >
          <el-button
            type="success"
            @click="showFunctionalCardMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
    </section>

    <!-- 艺术创意风格 -->
    <section class="style-section">
      <h1>九、艺术创意风格</h1>
      <h3>1、梵高星空背景</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showVanGoghMessage">梵高星空背景</el-button>
          <el-button type="danger" @click="showVanGoghMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showVanGoghMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showVanGoghMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showVanGoghMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>2、折纸动画效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showPaperFoldMessage">折纸动画效果</el-button>
          <el-button type="danger" @click="showPaperFoldMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showPaperFoldMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showPaperFoldMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showPaperFoldMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>3、画笔效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showPaintBrushMessage">画笔效果</el-button>
          <el-button type="danger" @click="showPaintBrushMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showPaintBrushMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showPaintBrushMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showPaintBrushMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>4、水墨效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showInkWashMessage">水墨效果</el-button>
          <el-button type="danger" @click="showInkWashMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showInkWashMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showInkWashMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showInkWashMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>5、马赛克效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showMosaicMessage">马赛克效果</el-button>
          <el-button type="danger" @click="showMosaicMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showMosaicMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showMosaicMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showMosaicMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
    </section>

    <!-- 未来科技风格 -->
    <section class="style-section">
      <h1>十、未来科技风格</h1>
      <h3>1、AR悬浮窗口</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showARWindowMessage">AR悬浮窗口</el-button>
          <el-button type="danger" @click="showARWindowMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showARWindowMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showARWindowMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showARWindowMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>2、粒子聚合效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showParticleNavMessage">粒子聚合效果</el-button>
          <el-button type="danger" @click="showParticleNavMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showParticleNavMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showParticleNavMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showParticleNavMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>3、全息投影</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showHologramMessage">全息投影</el-button>
          <el-button type="danger" @click="showHologramMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showHologramMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showHologramMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showHologramMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>4、科技HUD</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showTechHUDMessage">科技HUD</el-button>
          <el-button type="danger" @click="showTechHUDMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showTechHUDMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showTechHUDMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showTechHUDMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <h3>5、扫描效果</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showScanningMessage">扫描效果</el-button>
          <el-button type="danger" @click="showScanningMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showScanningMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showScanningMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showScanningMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElIcon, ElMessagePro } from 'element-plus'
import {
  Aim,
  Bell,
  Box,
  Brush,
  Connection,
  Cpu,
  Document,
  Folder,
  InfoFilled,
  Lightning,
  Monitor,
  Picture,
  Pointer,
  Refresh,
  Select,
  Star,
  Sunny,
  TrendCharts,
  Umbrella,
} from '@element-plus/icons-vue'

// 1. 极简主义风格
const showFloatingMessage = (type: any) => {
  ElMessagePro({
    message: '纯色浮动按钮效果',
    animation: 'floating',
    icon: h(Bell),
    duration: 3000,
    type,
  })
}

const showBreathingMessage = (type: any) => {
  ElMessagePro({
    message: '呼吸灯效果提示',
    // customClass: 'message-pro-breathing',
    animation: 'breathing',
    icon: h(Bell),
    duration: 3000,
    type,
  })
}

const showMinimalistMessage = (type: any) => {
  ElMessagePro({
    message: '极简线条风格',
    // customClass: 'message-pro-minimalist',
    animation: 'minimalist',
    icon: h(InfoFilled),
    duration: 3000,
    type,
  })
}

const showDotMessage = (type: any) => {
  ElMessagePro({
    message: '点状提示效果',
    // customClass: 'message-pro-dot',
    animation: 'dot',
    icon: h(InfoFilled),
    duration: 3000,
    type,
  })
}

const showMicroInteractionMessage = (type?: any) => {
  ElMessagePro({
    message: '微交互输入框效果',
    customClass: 'message-pro-micro-interaction',
    icon: h(Refresh),
    duration: 3000,
    type,
  })
}

// 2. 玻璃拟态风格
const showGlassmorphismMessage = (type?: any) => {
  ElMessagePro({
    message: '毛玻璃悬浮卡片效果',
    // customClass: 'message-pro-glassmorphism',
    animation: 'glassmorphism',
    icon: h(InfoFilled),
    duration: 3000,
    type,
  })
}

const showRainbowRefractionMessage = (type?: any) => {
  ElMessagePro({
    message: '彩虹折射按钮效果',
    // customClass: 'message-pro-rainbow-refraction',
    animation: 'rainbow-refraction',
    icon: h(Star),
    duration: 3000,
    type,
  })
}

const showFrostedGlassMessage = (type?: any) => {
  ElMessagePro({
    message: '磨砂玻璃效果',
    // customClass: 'message-pro-frosted-glass',
    animation: 'frosted-glass',
    icon: h(InfoFilled),
    duration: 3000,
    type,
  })
}

const showGlassCardMessage = (type?: any) => {
  ElMessagePro({
    message: '玻璃卡片效果',
    // customClass: 'message-pro-glass-card',
    animation: 'glass-card',
    icon: h(InfoFilled),
    duration: 3000,
    type,
  })
}

const showTranslucentMessage = (type?: any) => {
  ElMessagePro({
    message: '半透明效果',
    customClass: 'message-pro-translucent',
    icon: h(InfoFilled),
    duration: 3000,
    type,
  })
}

// 3. 3D立体风格
const show3DCubeMessage = (type?: any) => {
  ElMessagePro({
    message: '3D立方体效果',
    // customClass: 'message-pro-3d-cube',
    animation: '3d-cube',
    icon: h(Box),
    duration: 3000,
    type,
  })
}

const show3DProgressMessage = (type?: any) => {
  ElMessagePro({
    message: '立体进度条效果',
    // customClass: 'message-pro-3d-progress',
    animation: '3d-progress',
    icon: h(TrendCharts),
    duration: 3000,
    type,
  })
}

const show3DCardMessage = (type?: any) => {
  ElMessagePro({
    message: '3D卡片效果',
    customClass: 'message-pro-3d-card',
    icon: h(Document),
    duration: 3000,
    type,
  })
}

const show3DShadowMessage = (type?: any) => {
  ElMessagePro({
    message: '立体阴影效果',
    // customClass: 'message-pro-3d-shadow',
    animation: '3d-shadow',
    icon: h(Document),
    duration: 3000,
    type,
  })
}

const show3DButtonMessage = (type?: any) => {
  ElMessagePro({
    message: '3D按钮效果',
    // customClass: 'message-pro-3d-button',
    animation: '3d-button',
    icon: h(Pointer),
    duration: 3000,
    type,
  })
}

// 4. 复古潮流风格
const showPixelMessage = (type?: any) => {
  ElMessagePro({
    message: '像素风格效果',
    // customClass: 'message-pro-pixel',
    animation: 'pixel',
    icon: h(Monitor),
    duration: 3000,
    type,
  })
}

const showCRTMessage = (type?: any) => {
  ElMessagePro({
    message: 'CRT屏幕效果',
    // customClass: 'message-pro-crt',
    animation: 'crt',
    icon: h(Monitor),
    duration: 3000,
    type,
  })
}

const showRetroTVMessage = (type?: any) => {
  ElMessagePro({
    message: '复古电视机效果',
    // customClass: 'message-pro-retro-tv',
    animation: 'retro-tv',
    icon: h(Monitor),
    duration: 3000,
    type,
  })
}

const showVintageMessage = (type?: any) => {
  ElMessagePro({
    message: '复古纸张效果',
    // customClass: 'message-pro-vintage',
    animation: 'vintage',
    icon: h(Document),
    duration: 3000,
    type,
  })
}

const showRetroComputerMessage = (type?: any) => {
  ElMessagePro({
    message: '复古电脑效果',
    // customClass: 'message-pro-retro-computer',
    animation: 'retro-computer',
    icon: h(Select),
    duration: 3000,
    type,
  })
}

// 5. 液态动效风格
const showWaterDropMessage = (type?: any) => {
  ElMessagePro({
    message: '水滴融合效果',
    // customClass: 'message-pro-water-drop',
    animation: 'water-drop',
    icon: h(Umbrella),
    duration: 3000,
    type,
  })
}

const showFlowingBackgroundMessage = (type?: any) => {
  ElMessagePro({
    message: '流动背景效果',
    customClass: 'message-pro-flowing-background',
    icon: h(Umbrella),
    duration: 3000,
    type,
  })
}

const showLiquidButtonMessage = (type?: any) => {
  ElMessagePro({
    message: '液态按钮效果',
    // customClass: 'message-pro-liquid-button',
    animation: 'liquid-button',
    icon: h(Umbrella),
    duration: 3000,
    type,
  })
}

const showBlobMessage = (type?: any) => {
  ElMessagePro({
    message: '液态斑点效果',
    // customClass: 'message-pro-blob',
    animation: 'blob',
    icon: h(Umbrella),
    duration: 3000,
    type,
  })
}

const showWaveMessage = (type?: any) => {
  ElMessagePro({
    message: '波浪效果',
    // customClass: 'message-pro-wave',
    animation: 'wave',
    icon: h(Umbrella),
    duration: 3000,
    type,
  })
}

// 6. 赛博朋克风格
const showNeonGlitchMessage = (type?: any) => {
  ElMessagePro({
    message: '霓虹故障效果',
    // customClass: 'message-pro-neon-glitch',
    animation: 'neon-glitch',
    icon: h(Lightning),
    duration: 3000,
    type,
  })
}

const showHologramKeyboardMessage = (type?: any) => {
  ElMessagePro({
    message: '全息投影键盘效果',
    // customClass: 'message-pro-hologram-keyboard',
    animation: 'hologram-keyboard',
    icon: h(Cpu),
    duration: 3000,
    type,
  })
}

const showCyberpunkMessage = (type?: any) => {
  ElMessagePro({
    message: '赛博朋克风格',
    // customClass: 'message-pro-cyberpunk',
    animation: 'cyberpunk',
    icon: h(Cpu),
    duration: 3000,
    type,
  })
}

const showGlitchTextMessage = (type?: any) => {
  ElMessagePro({
    message: '故障文字效果',
    // customClass: 'message-pro-glitch-text',
    animation: 'glitch-text',
    icon: h(Select),
    duration: 3000,
    type,
  })
}

const showNeonBorderMessage = (type?: any) => {
  ElMessagePro({
    message: '霓虹边框效果',
    // customClass: 'message-pro-neon-border',
    animation: 'neon-border',
    icon: h(Lightning),
    duration: 3000,
    type,
  })
}

// 7. 自然生态风格
const showLeafGrowthMessage = (type?: any) => {
  ElMessagePro({
    message: '树叶生长效果',
    // customClass: 'message-pro-leaf-growth',
    animation: 'leaf-growth',
    icon: h(Sunny),
    duration: 3000,
    type,
  })
}

const showWaterRippleMessage = (type?: any) => {
  ElMessagePro({
    message: '水波纹效果',
    // customClass: 'message-pro-water-ripple',
    animation: 'water-ripple',
    icon: h(Umbrella),
    duration: 3000,
    type,
  })
}

const showNatureCardMessage = (type?: any) => {
  ElMessagePro({
    message: '自然卡片效果',
    // customClass: 'message-pro-nature-card',
    animation: 'nature-card',
    icon: h(Sunny),
    duration: 3000,
    type,
  })
}

const showWoodTextureMessage = (type?: any) => {
  ElMessagePro({
    message: '木纹质感效果',
    // customClass: 'message-pro-wood-texture',
    animation: 'wood-texture',
    icon: h(Sunny),
    duration: 3000,
    type,
  })
}

const showLeafPatternMessage = (type?: any) => {
  ElMessagePro({
    message: '叶纹图案效果',
    // customClass: 'message-pro-leaf-pattern',
    animation: 'leaf-pattern',
    icon: h(Sunny),
    duration: 3000,
    type,
  })
}

// 8. 实用功能型风格
const showFloatingBallMessage = (type?: any) => {
  ElMessagePro({
    message: '多级悬浮球效果',
    // customClass: 'message-pro-floating-ball',
    animation: 'floating-ball',
    icon: h(Aim),
    duration: 3000,
    type,
  })
}

const showSmartTabMessage = (type?: any) => {
  ElMessagePro({
    message: '智能折叠效果',
    // customClass: 'message-pro-smart-tab',
    animation: 'smart-tab',
    icon: h(Folder),
    duration: 3000,
    type,
  })
}

const showStatusIndicatorMessage = (type?: any) => {
  ElMessagePro({
    message: '状态指示灯效果',
    // customClass: 'message-pro-status-indicator',
    animation: 'status-indicator',
    icon: h(InfoFilled),
    duration: 3000,
    type,
  })
}

const showFunctionalCardMessage = (type?: any) => {
  ElMessagePro({
    message: '功能卡片效果',
    // customClass: 'message-pro-functional-card',
    animation: 'functional-card',
    icon: h(Document),
    duration: 3000,
    type,
  })
}

// 9. 艺术创意风格
const showVanGoghMessage = (type?: any) => {
  ElMessagePro({
    message: '梵高星空背景效果',
    // customClass: 'message-pro-van-gogh',
    animation: 'van-gogh',
    icon: h(Picture),
    duration: 3000,
    type,
  })
}

const showPaperFoldMessage = (type?: any) => {
  ElMessagePro({
    message: '折纸动画效果',
    // customClass: 'message-pro-paper-fold',
    animation: 'paper-fold',
    icon: h(Document),
    duration: 3000,
    type,
  })
}

const showPaintBrushMessage = (type?: any) => {
  ElMessagePro({
    message: '画笔效果',
    // customClass: 'message-pro-paint-brush',
    animation: 'paint-brush',
    icon: h(Brush),
    duration: 3000,
    type,
  })
}

const showInkWashMessage = (type?: any) => {
  ElMessagePro({
    message: '水墨效果',
    // customClass: 'message-pro-ink-wash',
    animation: 'ink-wash',
    icon: h(Brush),
    duration: 3000,
    type,
  })
}

const showMosaicMessage = (type?: any) => {
  ElMessagePro({
    message: '马赛克效果',
    // customClass: 'message-pro-mosaic',
    animation: 'mosaic',
    icon: h(Picture),
    duration: 3000,
    type,
  })
}

// 10. 未来科技风格
const showARWindowMessage = (type?: any) => {
  ElMessagePro({
    message: 'AR悬浮窗口效果',
    // customClass: 'message-pro-ar-window',
    animation: 'ar-window',
    icon: h(Monitor),
    duration: 3000,
    type,
  })
}

const showParticleNavMessage = (type?: any) => {
  ElMessagePro({
    message: '粒子聚合效果',
    // customClass: 'message-pro-particle-nav',
    animation: 'particle-nav',
    icon: h(Connection),
    duration: 3000,
    type,
  })
}

const showHologramMessage = (type?: any) => {
  ElMessagePro({
    message: '全息投影效果',
    // customClass: 'message-pro-hologram',
    animation: 'hologram',
    icon: h(Monitor),
    duration: 3000,
    type,
  })
}

const showTechHUDMessage = (type?: any) => {
  ElMessagePro({
    message: '科技HUD效果',
    // customClass: 'message-pro-tech-hud',
    animation: 'tech-hud',
    icon: h(Aim),
    duration: 3000,
    type,
  })
}

const showScanningMessage = (type?: any) => {
  ElMessagePro({
    message: '扫描效果',
    // customClass: 'message-pro-scanning',
    animation: 'scanning',
    icon: h(Aim),
    duration: 3000,
    type,
  })
}
</script>

<style scoped>
.styles-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.style-section {
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #409eff;
}

h3 {
  margin-bottom: 15px;
  color: #606266;
}
</style>
