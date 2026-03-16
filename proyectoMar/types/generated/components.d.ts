import type { Schema, Struct } from '@strapi/strapi';

export interface DetailsDetails extends Struct.ComponentSchema {
  collectionName: 'components_details_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    experience: Schema.Attribute.String;
    speciality: Schema.Attribute.String;
  };
}

export interface DetailsDetailsClass extends Struct.ComponentSchema {
  collectionName: 'components_details_details_classes';
  info: {
    displayName: 'details_class';
  };
  attributes: {
    aula: Schema.Attribute.String;
    time: Schema.Attribute.Time;
  };
}

export interface DetailsDetailsEvent extends Struct.ComponentSchema {
  collectionName: 'components_details_details_events';
  info: {
    displayName: 'details_event';
  };
  attributes: {
    date: Schema.Attribute.Date;
    place: Schema.Attribute.String;
    time: Schema.Attribute.Time;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'details.details': DetailsDetails;
      'details.details-class': DetailsDetailsClass;
      'details.details-event': DetailsDetailsEvent;
    }
  }
}
