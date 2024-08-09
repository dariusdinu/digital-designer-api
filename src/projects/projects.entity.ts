import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ProjectDocument = Project & Document;

@Schema({
  toJSON: {
    getters: true,
  },
  timestamps: true,
})
export class Project {
  @Prop({
    type: String,
    unique: true,
    default: function genUUID() {
      return uuidv4();
    },
  })
  projectId: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  imageId: string;

  @Prop()
  clientSiteLink: string;

  @Prop({ default: 'visible' })
  status: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
