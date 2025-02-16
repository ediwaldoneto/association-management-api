import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const isProduction = process.env.NODE_ENV === 'production';

const consoleFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
);

const fileFormat = format.combine(
  format.timestamp(),
  format.json()
);


const logger = createLogger({
  level: isProduction ? 'info' : 'debug',
  format: isProduction ? fileFormat : consoleFormat,
  transports: [

    new transports.Console({
      level: 'debug',
      format: consoleFormat,
    }),


    new DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'info',
      maxSize: '20m',
      maxFiles: '14d',
      format: fileFormat,
    }),


    new DailyRotateFile({
      filename: 'logs/errors-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'error',
      maxSize: '20m',
      maxFiles: '14d',
      format: fileFormat,
    })
  ]
});

logger.exceptions.handle(
  new transports.Console({
    format: format.combine(format.colorize(), format.simple())
  }),
  new DailyRotateFile({
    filename: 'logs/exceptions-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    format: fileFormat,
    level: 'error'
  })
);

logger.rejections.handle(
  new transports.Console({
    format: format.combine(format.colorize(), format.simple())
  }),
  new DailyRotateFile({
    filename: 'logs/rejections-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    format: fileFormat,
    level: 'warn'
  })
);

export default logger;
