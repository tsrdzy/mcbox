<template>
  <main
    tabindex="0"
    v-on:keyup.tab.prevent="byTab()"
    @keyup="onkeyups($event)"
    @keydown="okeydowns($event)"
  >
    <div class="content">
      <div class="main_content">
        <!--键盘-->
        <div class="keyboard">
          <!--键盘 左-->
          <div class="keyboard_left">
            <div class="keyboard_left_1">
              <div class="keyboard_left_1_1">
                <div class="key" id="27">ESC</div>
              </div>
              <div class="keyboard_left_1_2">
                <div class="key" id="112">F1</div>
                <div class="key" id="113">F2</div>
                <div class="key" id="114">F3</div>
                <div class="key" id="115">F4</div>
              </div>
              <div class="keyboard_left_1_3">
                <div class="key" id="116">F5</div>
                <div class="key" id="117">F6</div>
                <div class="key" id="118">F7</div>
                <div class="key" id="119">F8</div>
              </div>
              <div class="keyboard_left_1_4">
                <div class="key" id="120">F9</div>
                <div class="key" id="121">F10</div>
                <div class="key" id="122">F11</div>
                <div class="key" id="123">F12</div>
              </div>
            </div>
            <div class="keyboard_left_2">
              <div class="key" id="192">
                <p>~</p>
                <p>`</p>
              </div>
              <div class="key" id="49">
                <p>!</p>
                <p>1</p>
              </div>
              <div class="key" id="50">
                <p>@</p>
                <p>2</p>
              </div>
              <div class="key" id="51">
                <p>#</p>
                <p>3</p>
              </div>
              <div class="key" id="52">
                <p>$</p>
                <p>4</p>
              </div>
              <div class="key" id="53">
                <p>%</p>
                <p>5</p>
              </div>
              <div class="key" id="54">
                <p>^</p>
                <p>6</p>
              </div>
              <div class="key" id="55">
                <p>&</p>
                <p>7</p>
              </div>
              <div class="key" id="56">
                <p>*</p>
                <p>8</p>
              </div>
              <div class="key" id="57">
                <p>(</p>
                <p>9</p>
              </div>
              <div class="key" id="48">
                <p>)</p>
                <p>0</p>
              </div>
              <div class="key" id="189">
                <p>_</p>
                <p>-</p>
              </div>
              <div class="key" id="187">
                <p>+</p>
                <p>=</p>
              </div>
              <div class="key key_80" id="8">Backspace</div>
            </div>
            <div class="keyboard_left_3">
              <div class="key key_60" id="9">Tab</div>
              <div class="key" id="81">Q</div>
              <div class="key" id="87">W</div>
              <div class="key" id="69">E</div>
              <div class="key" id="82">R</div>
              <div class="key" id="84">T</div>
              <div class="key" id="89">Y</div>
              <div class="key" id="85">U</div>
              <div class="key" id="73">I</div>
              <div class="key" id="79">O</div>
              <div class="key" id="80">P</div>
              <div class="key" id="219">
                <p>{</p>
                <p>[</p>
              </div>
              <div class="key" id="221">
                <p>}</p>
                <p>]</p>
              </div>
              <div class="key key_60" id="220">
                <p>|</p>
                <p>\</p>
              </div>
            </div>
            <div class="keyboard_left_4">
              <div class="key key_73" id="20">CapsLk</div>
              <div class="key" id="65">A</div>
              <div class="key" id="83">S</div>
              <div class="key" id="68">D</div>
              <div class="key" id="70">F</div>
              <div class="key" id="71">G</div>
              <div class="key" id="72">H</div>
              <div class="key" id="74">J</div>
              <div class="key" id="75">K</div>
              <div class="key" id="76">L</div>
              <div class="key" id="186">
                <p>:</p>
                <p>;</p>
              </div>
              <div class="key" id="222">
                <p>"</p>
                <p>'</p>
              </div>
              <div class="key key_93 13">Enter</div>
            </div>
            <div class="keyboard_left_5">
              <div class="key key_93 16">Shift</div>
              <div class="key" id="90">Z</div>
              <div class="key" id="88">X</div>
              <div class="key" id="67">C</div>
              <div class="key" id="86">V</div>
              <div class="key" id="66">B</div>
              <div class="key" id="78">N</div>
              <div class="key" id="77">M</div>
              <div class="key" id="188">
                <p>&lt;</p>
                <p>,</p>
              </div>
              <div class="key" id="190">
                <p>&gt;</p>
                <p>.</p>
              </div>
              <div class="key" id="191">
                <p>?</p>
                <p>/</p>
              </div>
              <div class="key key_119 16">Shift</div>
            </div>
            <div class="keyboard_left_6">
              <div class="key key_50 17">Ctrl</div>
              <div class="key key_50 iconfont" id="91">&#xe668;</div>
              <div class="key key_50 18">Alt</div>
              <div class="key key_200" id="32"></div>
              <div class="key key_50 18">Alt</div>
              <div class="key key_50" id="77">Fn</div>
              <div class="key key_50 iconfont" id="93">&#xe646;</div>
              <div class="key key_50 17">Ctrl</div>
            </div>
          </div>
          <!--键盘 中-->
          <div class="keyboard_middle">
            <div class="keyboard_middle_1">
              <div class="key" id="44">PRTSC</div>
              <div class="key" id="145">SCRLK</div>
              <div class="key" id="19">PAUSE</div>
            </div>
            <div class="keyboard_left_2">
              <div class="key" id="45">INS</div>
              <div class="key" id="36">HOME</div>
              <div class="key" id="33">PGUP</div>
            </div>
            <div class="keyboard_left_3">
              <div class="key" id="46">DEL</div>
              <div class="key" id="35">END</div>
              <div class="key" id="34">PGDN</div>
            </div>
            <div class="keyboard_left_4">
              <div class="key_kong" id="0"></div>
              <div class="key_kong" id="0"></div>
              <div class="key_kong" id="0"></div>
            </div>
            <div class="keyboard_left_5">
              <div class="key_kong" id="0"></div>
              <div class="key" id="38">↑</div>
              <div class="key_kong" id="0"></div>
            </div>
            <div class="keyboard_left_6">
              <div class="key" id="37">←</div>
              <div class="key" id="40">↓</div>
              <div class="key" id="39">→</div>
            </div>
          </div>
          <!--键盘 右-->
          <div class="keyboard_right">
            <div class="keyboard_right_left">
              <div class="keyboard_right_left_kong">
                <div class="key_kong" id="0"></div>
                <div class="key_kong" id="0"></div>
                <div class="key_kong" id="0"></div>
              </div>
              <div class="keyboard_right_left_1">
                <div class="key" id="144">
                  <p>NUM</p>
                  <p>LOCK</p>
                </div>
                <div class="key" id="111">/</div>
                <div class="key" id="106">*</div>
              </div>
              <div class="keyboard_right_left_2">
                <div class="key" id="103">7</div>
                <div class="key" id="104">8</div>
                <div class="key" id="105">9</div>
              </div>
              <div class="keyboard_right_left_3">
                <div class="key" id="100">4</div>
                <div class="key" id="101">5</div>
                <div class="key" id="102">6</div>
              </div>
              <div class="keyboard_right_left_4">
                <div class="key" id="97">1</div>
                <div class="key" id="98">2</div>
                <div class="key" id="99">3</div>
              </div>
              <div class="keyboard_right_left_5">
                <div class="key key_86" id="96">0</div>
                <div class="key" id="110">
                  <p>.</p>
                  <p>DEL</p>
                </div>
              </div>
            </div>
            <div class="keyboard_right_right">
              <div class="keyboard_right_left_kong">
                <div class="key_kong" id="0"></div>
              </div>
              <div class="keyboard_right_right_1">
                <div class="key" id="109">-</div>
              </div>
              <div class="keyboard_right_right_2">
                <div class="key key_h86" id="107">+</div>
              </div>
              <div class="keyboard_right_right_3">
                <div class="key key_h86 13">ENTER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_list">
        <div class="footer_list_1">
          <div class="key key_Active"></div>
          <p>Active</p>
        </div>
        <div class="footer_list_2">
          <div class="key key_Pressed"></div>
          <p>Pressed</p>
        </div>
        <div class="footer_list_3">
          <div class="key key_Nerver"></div>
          <p>Nerver</p>
        </div>
      </div>
      <hr />
      <div class="footer_keycode">
        <p>Keycode:&nbsp;</p>
        <h2 id="a1">null</h2>
      </div>
      <div class="footer_Tips">Tips:</div>
      <div class="footer_Tips">
        ·测试小键盘时请确保打开 <b>NUMLOCK(锁定键)</b> 否则会导致键代码错误。
      </div>
      <div class="footer_Tips">·按键 Fn 无法测试。</div>
      <div class="footer_Tips">
        ·部分浏览器可能不支持本测试功能,请更新到最新版的浏览器。
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    okeydowns(e1) {
      var keycode1 = e1.keyCode;
      if (
        keycode1 == 112 || //屏蔽 F1
        keycode1 == 113 || //屏蔽 F2
        keycode1 == 114 || //屏蔽 F3
        keycode1 == 115 || //屏蔽 F4
        keycode1 == 116 || //屏蔽 F5
        keycode1 == 117 || //屏蔽 F6
        keycode1 == 118 || //屏蔽 F7
        keycode1 == 119 || //屏蔽 F8
        keycode1 == 120 || //屏蔽 F9
        keycode1 == 121 || //屏蔽 F10
        keycode1 == 122 || //屏蔽 F11
        keycode1 == 123 || //屏蔽F12
        keycode1 == 9 ||
        keycode1 == 91 ||
        keycode1 == 18
      ) {
        keycode1 = 0;
        e1.returnValue = false;
        return;
      }
      if (
        keycode1 == 13 ||
        keycode1 == 16 ||
        keycode1 == 17 ||
        keycode1 == 18
      ) {
        var classkey = document.getElementsByClassName(keycode1);
        if (classkey != null) {
          classkey[0].style.backgroundImage =
            "linear-gradient(#000000, #000000)";
          classkey[1].style.backgroundImage =
            "linear-gradient(#000000, #000000)";
        }
      } else {
        if (document.getElementById(keycode1) != undefined) {
          document.getElementById(keycode1).style.backgroundImage =
            "linear-gradient(#000000, #000000)";
        }
      }
      document.getElementById("a1").innerHTML = keycode1;
    },
    onkeyups(e) {
      if (
        e.keyCode == 13 ||
        e.keyCode == 16 ||
        e.keyCode == 17 ||
        e.keyCode == 18
      ) {
        var classkey = document.getElementsByClassName(e.keyCode);
        if (classkey != null) {
          classkey[0].style.backgroundImage =
            "linear-gradient(#b1b1b1, #494949)";
          classkey[1].style.backgroundImage =
            "linear-gradient(#b1b1b1, #494949)";
        }
      } else {
        if (document.getElementById(e.keyCode) != null) {
          document.getElementById(e.keyCode).style.backgroundImage =
            "linear-gradient(#b1b1b1, #494949)";
        }
      }
      document.getElementById("a1").innerHTML = "null";
    },
    byTab() {
      console.log("tab");
    },
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: auto;
}

main > div {
  margin: 0 auto;
  margin-top: 20px;
  /* width: 80%; */
  height: auto;
  border: 1px solid rgb(219, 219, 219);
  width: 1050px;
  padding: 20px;
  border-radius: 20px;
}

main > .content {
  background-color: rgb(44, 44, 44);
}

main > .footer {
  border: 0px;
}

.keyboard {
  display: flex;
  justify-content: center;
}

.keyboard_left,
.keyboard_middle {
  margin-right: 20px;
}

.keyboard_left_1,
.keyboard_left_2,
.keyboard_left_3,
.keyboard_left_4,
.keyboard_left_5,
.keyboard_left_6,
.keyboard_middle_1,
.keyboard_right_left_1,
.keyboard_right_left_2,
.keyboard_right_left_3,
.keyboard_right_left_4,
.keyboard_right_left_5 {
  display: flex;
  flex-wrap: nowrap;
}

.keyboard_left_1_1 {
  margin-right: 26px;
}

.keyboard_left_1 {
  justify-content: space-between;
  margin-bottom: 20px;
}

.keyboard_middle_1,
.keyboard_right_left_kong {
  margin-bottom: 20px;
}

.key {
  width: 40px;
  height: 40px;
  border: 1px solid #aaa;
  margin: 2px;
  border-radius: 3px;
  font-size: 12px;
  background-image: linear-gradient(#414141, #000000);
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 1px rgb(0, 0, 0), 0px 0px 1px rgb(0, 0, 0);
}

.key_kong {
  width: 42px;
  height: 42px;
  margin: 2px;
}

.keyboard_left_1_1,
.keyboard_left_1_2,
.keyboard_left_1_3,
.keyboard_left_1_4,
.keyboard_left_1_5,
.keyboard_left_1_6,
.keyboard_middle_1,
.keyboard_right_left_kong,
.keyboard_right,
.keyboard_right_right_1,
.keyboard_right_right_2,
.keyboard_right_right_3 {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
}

.keyboard_left_1 > div > div,
.keyboard_left_2 > div,
.keyboard_left_3 > div,
.keyboard_left_4 > div,
.keyboard_left_5 > div,
.keyboard_left_6 > div,
.keyboard_right_left_1,
.keyboard_right_left_2,
.keyboard_right_left_3,
.keyboard_right_left_4,
.keyboard_right_left_5,
.keyboard_right_right_1,
.keyboard_middle_1 {
  line-height: 40px;
  text-align: center;
}

.keyboard_right_right_2,
.keyboard_right_right_3 {
  line-height: 86px;
  text-align: center;
}

.keyboard_left_2 > div > p,
.keyboard_left_3 > div > p,
.keyboard_left_4 > div > p,
.keyboard_left_5 > div > p,
.keyboard_right_left_1 > div > p,
.keyboard_right_left_5 > div > p {
  width: 40px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}

.key_50 {
  width: 50px;
}

.key_80 {
  width: 80px;
}

.key_86 {
  width: 86px;
}

.key_60 {
  width: 60px;
}

.key_73 {
  width: 73px;
}

.key_93 {
  width: 93px;
}

.key_119 {
  width: 119px;
}

.key_200 {
  width: 286px;
}

.key_h86 {
  height: 86px;
}

.key_Active {
  background-image: linear-gradient(#000000, #000000);
}

.key_Pressed {
  background-image: linear-gradient(#414141, #000000);
}

.key_Nerver {
  background-image: linear-gradient(#b1b1b1, #494949);
}

.footer_list,
.footer_keycode {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  /* flex-wrap: nowrap; */
  height: 42px;
}

.footer > div > p,
.footer > p {
  height: 40px;
  color: #000;
}

.footer_list > div {
  margin-right: 20px;
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  line-height: 40px;
  height: 40px;
}

.footer {
  margin: 0 auto;
  padding: 0;
}
</style>