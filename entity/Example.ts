import {
  DateTimeFormatter,
  Instant,
  LocalDateTime,
  nativeJs,
  OffsetDateTime,
  ZonedDateTime,
  ZoneId,
} from "@js-joda/core";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
  name: "Example",
})
export class Example {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "timestamptz",
    transformer: {
      to: (value: Instant) => value.toJSON(),
      from: (value: Date) => {
        return nativeJs(value).toInstant();
      },
    },
    default: () => "CURRENT_TIMESTAMP",
  })
  exampleDateTime: Instant;
}
