import Head from 'next/head'
import * as React from 'react';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { Card,Avatar ,Grid } from '@nextui-org/react';
function My() {
    // 2. Use at the root of your app
    return (
        <Card css={{ mw: "400px" }}>

            
        <p>A basic card.

        <Grid.Container gap={2}>
    <Grid>
        <Avatar squared src="/avatars/avatar-1.png" />
    </Grid>
    <Grid>
        <Avatar squared text="Junior" />
    </Grid>
    <Grid>
        <Avatar squared src="/avatars/avatar-3.png" />
    </Grid>
    <Grid>
        <Avatar squared text="Jane" />
    </Grid>
    <Grid>
        <Avatar squared src="/avatars/avatar-6.png" />
    </Grid>
    <Grid>
        <Avatar squared text="Joe" />
    </Grid>
</Grid.Container>

        </p>
      </Card>
    );
  }

export default My;