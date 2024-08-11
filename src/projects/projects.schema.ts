import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Project extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  imageId: string;

  @Prop({ required: true })
  clientSiteLink: string;

  @Prop({ default: false })
  isShown: boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
