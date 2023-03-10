import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import app from '../pages/_app'
import { periodFormatters_jest } from '../components/tooltip.render' // eslint-disable-line camelcase
import InfoBox from '../components/InfoBox'

// Touch app to initialize ru locale
app // eslint-disable-line no-unused-expressions

describe(`Tooltip period format on x-axis`, () => {
  it(`gives proper format for day period`, () => {
    const { topFormat, bottomFormat } = periodFormatters_jest(`День`)
    const date = new Date(Date.UTC(2021, 0, 1))
    expect(topFormat(date)).toBe(`пт`)
    expect(bottomFormat(date)).toBe(`01 янв`)
  })

  it(`gives proper format for week period within month`, () => {
    const { topFormat, bottomFormat } = periodFormatters_jest(`Неделя`)
    const date = new Date(Date.UTC(2022, 11, 12))
    expect(topFormat(date)).toBe(`12–18`)
    expect(bottomFormat(date)).toBe(`дек`)
  })

  it(`gives proper format for week period across two months`, () => {
    const { topFormat, bottomFormat } = periodFormatters_jest(`Неделя`)
    const date = new Date(Date.UTC(2022, 10, 28))
    expect(topFormat(date)).toBe(`28–04`)
    expect(bottomFormat(date)).toBe(`ноя/дек`)
  })

  it(`gives proper format for month period`, () => {
    const { topFormat, bottomFormat } = periodFormatters_jest(`Месяц`)
    const date = new Date(Date.UTC(2021, 0, 1))
    expect(topFormat(date)).toBe(`Янв.`)
    expect(bottomFormat(date)).toBe(`2021`)
  })
})

describe(`InfoBox date format`, () => {
  describe(`Without tooltip`, () => {
    it(`shows date and week number in day time unit`, () => {
      render(<InfoBox date={new Date(Date.UTC(2022, 11, 19))} timeUnit="День" />)
      const date = document.querySelector(`.infoBoxDate`)
      expect(date).toHaveTextContent(`19.12.2022 51н`)
    })

    it(`shows date and week number in week time unit`, () => {
      render(<InfoBox date={new Date(Date.UTC(2022, 11, 19))} timeUnit="Неделя" />)
      const date = document.querySelector(`.infoBoxDate`)
      expect(date).toHaveTextContent(`19.12.2022 51н`)
    })

    it(`shows month and year month time unit`, () => {
      render(<InfoBox date={new Date(Date.UTC(2022, 11, 19))} timeUnit="Месяц" />)
      const date = document.querySelector(`.infoBoxDate`)
      expect(date).toHaveTextContent(`Дек. 2022`)
    })
  })

  describe(`With tooltip`, () => {
    it(`shows date and week number in day time unit`, () => {
      render(<InfoBox tooltip={{ date: new Date(Date.UTC(2022, 11, 19)) }} timeUnit="День" date={new Date()} />)
      const date = document.querySelector(`.infoBoxDate`)
      expect(date).toHaveTextContent(`19.12.2022 51н`)
    })

    it(`shows dates and week number in week time unit when within a month`, () => {
      render(<InfoBox tooltip={{ date: new Date(Date.UTC(2022, 11, 19)) }} timeUnit="Неделя" date={new Date()} />)
      const date = document.querySelector(`.infoBoxDate`)
      expect(date).toHaveTextContent(`19–25.12.2022 51н`)
    })

    it(`shows dates.months and week number in week time unit when across two months`, () => {
      render(<InfoBox tooltip={{ date: new Date(Date.UTC(2022, 10, 28)) }} timeUnit="Неделя" date={new Date()} />)
      const date = document.querySelector(`.infoBoxDate`)
      expect(date).toHaveTextContent(`28.11–04.12.2022 48н`)
    })

    it(`shows dates.months.years and week number in week time unit when across two years`, () => {
      render(<InfoBox tooltip={{ date: new Date(Date.UTC(2022, 11, 26)) }} timeUnit="Неделя" date={new Date()} />)
      const date = document.querySelector(`.infoBoxDate`)
      expect(date).toHaveTextContent(`26.12.2022–01.01.2023 52н`)
    })

    it(`shows month and year in month time unit`, () => {
      render(<InfoBox tooltip={{ date: new Date(Date.UTC(2022, 11, 19)) }} timeUnit="Месяц" date={new Date()} />)
      const date = document.querySelector(`.infoBoxDate`)
      expect(date).toHaveTextContent(`Дек. 2022`)
    })
  })
})
