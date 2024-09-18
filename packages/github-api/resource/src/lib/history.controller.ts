import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';

export class HistoryController {
  @Get()
  async findAll() {
    return [];
  }
}
