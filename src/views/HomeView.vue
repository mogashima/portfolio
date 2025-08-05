<template>
    <h2 class="home-title">ポートフォリオ</h2>
    <section class="profile">
        <div class="profile-image">
            <img src="@/assets/images/mypicture.jpg" alt="プロフィール画像" />
        </div>
        <div class="profile-text">
            <p>30代</p>
            <p>埼玉県在住</p>
            <p>フリーランス</p>
            <p>趣味</p>
            <ul>
                <li>ギター</li>
                <li>将棋</li>
            </ul>
        </div>
    </section>
    <section class="skill">
        <div class="skill-block">
            <h3>使用言語</h3>
            <div class="skill-list">
                <span class="skill-tag tag-advanced">PHP</span>
                <span class="skill-tag tag-advanced">Typescript</span>
                <span class="skill-tag tag-advanced">Java</span>
                <span class="skill-tag tag-beginner">Python</span>
            </div>
        </div>
        <div class="skill-block">
            <h3>データベース</h3>
            <div class="skill-list">
                <span class="skill-tag tag-advanced">MySQL</span>
                <span class="skill-tag tag-advanced">MongoDB</span>
            </div>
        </div>
        <div class="skill-block">
            <h3>フレームワーク</h3>
            <div class="skill-list">
                <span class="skill-tag tag-advanced">Laravel</span>
                <span class="skill-tag tag-advanced">SpringBoot</span>
                <span class="skill-tag tag-advanced">Angular</span>
                <span class="skill-tag tag-beginner">Vue.js</span>
                <span class="skill-tag tag-beginner">Express</span>
            </div>
        </div>
    </section>
    <section class="career">
        <h2>経歴</h2>
        <div class="career-card">
            <h3 class="career-title">物流管理システム</h3>
            <div class="career-desc">
                <p>各所の物流センターの在庫を管理するシステムの開発</p>
                <p>現行システムがあり、現行の仕組みを踏襲しながら新しいシステムを構築</p>
                <p>Java, SpringBoot, Vue.js</p>
                <p>コーディング・テスト</p>
            </div>
        </div>

        <div class="career-card">
            <h3 class="career-title">業務端末管理サイト</h3>
            <div class="career-desc">
                <p>各所に設置したPOS端末を管理するシステムの開発</p>
                <p>各端末との通信は別システムのAPIがあり、そのAPIを利用して各端末を制御するシステムを構築</p>
                <p>PHP, Laravel, MySQL</p>
                <p>コーディング</p>
            </div>
        </div>

        <div class="career-card">
            <h3 class="career-title">住宅リフォーム見積サイト</h3>
            <div class="career-desc">
                <p>住宅リフォームの見積もりを作成するシステムの開発</p>
                <p>現行システムがあり、現行の仕組みを踏襲しながら新しいシステムを構築</p>
                <p>PHP, Codeigniter, MySQL</p>
                <p>コーディング</p>
            </div>
        </div>

        <div class="career-card">
            <h3 class="career-title">アンケートシステム</h3>
            <div class="career-desc">
                <p>アンケートの作成、回答をできるシステムの開発</p>
                <p>アンケートを作成できる管理者を管理する機能の開発</p>
                <p>Angular, Node.js, Express, MongoDB</p>
                <p>リーダー, 設計, コーディング, 運用</p>
            </div>
        </div>

        <div class="career-card">
            <h3 class="career-title">ポータルサイト</h3>
            <div class="career-desc">
                <p>BtoB向けサーバー管理システムの開発</p>
                <p>PHP, Laravel, MySQL</p>
                <p>コーディング, テスト</p>
            </div>
        </div>

        <div class="career-card">
            <h3 class="career-title">旅行日程作成システム</h3>
            <div class="career-desc">
                <p>じゃらんのデータを活用しての旅行日程を作成と提案するWEBシステム開発</p>
                <p>PHP, FuelPHP, MySQL</p>
                <p>コーディング, テスト</p>
            </div>
        </div>

        <div class="career-card">
            <h3 class="career-title">学会向け会員管理システム</h3>
            <div class="career-desc">
                <p>学会会員を管理するシステムの開発</p>
                <p>月々の支払やスケジュールなどをウェブで操作できる</p>
                <p>PHP, CakePHP, MySQL</p>
                <p>コーディング, テスト</p>
            </div>
        </div>
    </section>

</template>

<script setup lang="ts">
</script>
