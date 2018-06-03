<template>
  <section class="container">
    <ul>
      <li><nuxt-link to="/test/dygraphs">Dygraphs</nuxt-link></li>
      <li><nuxt-link to="/test/chart.js">Chart.js</nuxt-link></li>
      <li><nuxt-link to="/test/billboard">billboard.js</nuxt-link></li>
    </ul>
    <table>
      <thead>
        <tr>
          <td>Library</td>
          <td>10</td>
          <td>100</td>
          <td>1.000</td>
          <td>10.000</td>
          <td>100.000</td>
          <td>500.000</td>
          <td>1.000.000</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dygraphs - chrome</td>
          <td>10.6</td>
          <td>12.6</td>
          <td>17.1</td>
          <td>22.0</td>
          <td>69.1</td>
          <td></td>
          <td>1092.50 - crash during 6th</td>
        </tr>
        <tr>
          <td>Dygraphs - firefox</td>
          <td>19.6</td>
          <td>17.6</td>
          <td>18.5</td>
          <td>30.9</td>
          <td>108.8</td>
          <td></td>
          <td>995.7</td>
        </tr>
        <tr>
          <td>Chart.js - chrome</td>
          <td>8.5</td>
          <td>11.9</td>
          <td>24.1</td>
          <td>69.1</td>
          <td>451.2</td>
          <td></td>
          <td>crash during 1st</td>
        </tr>
        <tr>
          <td>Chart.js - firefox</td>
          <td>16.9</td>
          <td>19.6</td>
          <td>31.6</td>
          <td>176.4</td>
          <td>2180.0</td>
          <td></td>
          <td>67061.7</td>
        </tr>
        <tr>
          <td>billboard.js - firefox</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
</style>
